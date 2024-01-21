export const optionsRec = [
  { value: 'all', label: 'All' },
  { value: 'recommended', label: 'Recommended ' },
  { value: 'notRecommended', label: 'Not recommended' },
];

export const initialState = {
  products: [],
  categories: [],
  productsById: null,
  filters: {
    query: '',
    category: { value: 'all', label: 'All categories' },
    recommended: optionsRec[0],
  },
};
