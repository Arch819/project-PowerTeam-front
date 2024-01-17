//  Products page "/products"
// Складається з:
//  - компоненту TitlePage (опис компонента деталізовано у Diary page)
//  - компоненту ProductsFilters, що дозволяє користувачу відфільтрувати продукти по ключовому слову, за категорією, а також в
// залежності рекомендовано цей продукт йому або ні
//  - компоненту ProductsList, що містить перелік продуктів

import Section from 'components/Section';

function ProductsPage() {
  return (
    <Section use={'secondary'}>
      <div className="container">
        <h2>Products</h2>
      </div>
    </Section>
  );
}

export default ProductsPage;
