const getCustomStyles = fontSize => ({
  //control wrapper that surrounds the actual input field
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    appearance: 'none', // Removes the default browser appearance
    WebkitAppearance: 'none', // Removes the default browser appearance
    MozAppearance: 'none', // Removes the default browser appearance
    padding: '6px 10px',
    cursor: 'pointer',
  }),
  //options within the dropdown menu
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected
      ? 'rgba(28, 28, 28, 1)'
      : isFocused
      ? 'rgba(28, 28, 28, 1)'
      : 'rgba(28, 28, 28, 1)',
    color: isSelected ? '#E6533C' : '#EFEDE8',
    paddingBottom: '8px',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'rgba(28, 28, 28, 1)',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#EFEDE8', // color of active placeholder
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#EFEDE8',
  }),
  container: provided => ({
    ...provided,
    border: '1px solid rgba(239, 237, 232, 0.30)',
    borderRadius: '12px',
    outline: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0', // Override padding inside the value container if necessary
  }),
  placeholder: provided => ({
    ...provided,
    fontSize,
  }),
  menuList: base => ({
    ...base,
    borderRadius: '12px', // border of dropdown menu
    overflowY: 'scroll',
    paddingLeft: '6px',
    paddingTop: '6px',
    width: `calc(100% - 7px)`,
    '::-webkit-scrollbar-track': {
      marginTop: '14px',
    },
  }),
});

export default getCustomStyles;
