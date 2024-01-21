import { optionsRec } from 'components/products/ProductsFilters';

export const initialState = {
  products: [],
  categories: [],
  filters: {
    query: '',
    category: { value: 'all', label: 'All categories' },
    recommended: optionsRec[0],
  },
  loading: false,
  error: null,
};
