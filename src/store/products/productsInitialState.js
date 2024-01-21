import { optionsRec } from 'components/products/ProductsFilters';

export const initialState = {
  products: [],
  categories: [],
  productsById: null,
  filters: {
    query: '',
    category: { value: 'all', label: 'All categories' },
    recommended: optionsRec[0],
  },
  loading: false,
  error: null,
};
