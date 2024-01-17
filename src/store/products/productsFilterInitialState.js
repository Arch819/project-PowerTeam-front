 const options = [
    { value: 'all', label: 'All' },
    { value: 'true', label: 'Recommended ' },
    { value: 'false', label: 'Not recommended' },
  ];

  export const initialState = {
    query: '',
    category: { value: 'all', label: 'All categories' },
    recommended: options[0],
  };