import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Section from 'components/Section';
import {
  Icon,
  LinkBack,
  LinkBox,
  TitleBox,
} from 'page/ExercisesListPage/ExercisesListPage.styled';
import sprite from '../../images/sprite.svg';

import BasicModalWindow from 'components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductsId } from 'store/products/productsSelector';
import { getProductsId } from 'store/products/productsOperations';
import AddProductForm from 'components/Modal/AddProductForm';
import TitlePage from 'components/TitlePage';
import { AddProductSuccess } from 'components/Modal/AddProductSuccess';
import ProductItemPageStyled from './ProductItemPageStyled';

function ProductItemPage() {
  const { prodId } = useParams();
  const dispatch = useDispatch();

  const location = useLocation();
  const newPath = location.pathname.replace(new RegExp(`/${prodId}.*$`), '');
  const backLinkHref = location.state?.from ?? newPath;
  const ref = useRef(backLinkHref);

  const [successModal, setSuccessModal] = useState(false);
  const [dataSuccess, setDataSuccess] = useState(null);
  const productData = useSelector(selectProductsId);

  useEffect(() => {
    dispatch(getProductsId(prodId));
  }, [prodId, dispatch]);

  const tumblerSuccessModal = () => {
    setSuccessModal(preSuccessModal => {
      return !preSuccessModal;
    });
  };

  const handleSuccessModal = data => {
    setDataSuccess(data);
  };

  return (
    <Section className="exercises-bg" use={'secondary'}>
      {productData && (
        <div className="container">
          <LinkBox>
            <LinkBack to={ref.current} aria-label="Go to products` list">
              <Icon>
                <use href={`${sprite}#${'icon-back'}`} />
              </Icon>
              Back
            </LinkBack>
          </LinkBox>
          <TitleBox>
            <TitlePage title={'Product'} />
          </TitleBox>

          <ProductItemPageStyled>
            <AddProductForm
              eldata={productData}
              onClick={tumblerSuccessModal}
              openSuccess={handleSuccessModal}
            />
          </ProductItemPageStyled>
          {successModal && (
            <BasicModalWindow isOpenModalToggle={tumblerSuccessModal}>
              <AddProductSuccess
                data={dataSuccess}
                closeModal={tumblerSuccessModal}
                pathBack={newPath}
              />
            </BasicModalWindow>
          )}
        </div>
      )}
    </Section>
  );
}

export default ProductItemPage;
