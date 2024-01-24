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

function ProductItemPage() {
  const { prodId } = useParams();
  console.log(prodId);
  const dispatch = useDispatch();

  const location = useLocation();
  const newPath = location.pathname.replace(new RegExp(`/${prodId}.*$`), '');
  const backLinkHref = location.state?.from ?? newPath;
  const ref = useRef(backLinkHref);

  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [dataSuccess, setDataSuccess] = useState(null);
  const productData = useSelector(selectProductsId);
  console.log(productData);

  useEffect(() => {
    dispatch(getProductsId(prodId));
  }, [prodId, dispatch]);

  const openModal = () => {
    setModal(preModal => {
      return !preModal;
    });
  };

  const closeSuccessModal = () => {
    setSuccessModal(false);
  };

  const handleSuccessModal = data => {
    setDataSuccess(data);
    setSuccessModal(true);
  };

  return (
    <Section className="exercises-bg" use={'secondary'}>
      {productData && (
        <div className="container">
          <LinkBox>
            <LinkBack to={ref.current}>
              <Icon>
                <use href={`${sprite}#${'icon-back'}`} />
              </Icon>
              Back
            </LinkBack>
          </LinkBox>
          <TitleBox>
            <TitlePage title={'Product'} />
          </TitleBox>

          <AddProductForm
            eldata={productData}
            onClick={openModal}
            openSuccess={handleSuccessModal}
          />
          {successModal && (
            <BasicModalWindow isOpenModalToggle={closeSuccessModal}>
              <AddProductSuccess
                data={dataSuccess}
                closeModal={closeSuccessModal}
              />
            </BasicModalWindow>
          )}
        </div>
      )}
    </Section>
  );
}

export default ProductItemPage;
