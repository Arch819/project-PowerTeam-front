const getCustomStyles = fontSize => ({
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    padding: '6px 10px',
    cursor: 'pointer',
  }),
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
    color: '#EFEDE8',
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
    padding: '0',
  }),
  placeholder: provided => ({
    ...provided,
    fontSize,
  }),
  menuList: base => ({
    ...base,
    borderRadius: '12px',
    overflowY: 'scroll',
    paddingLeft: '6px',
    paddingTop: '6px',
    width: `calc(100% - 7px)`,
    '& > div:last-child': {
      paddingBottom: '14px',
    },
    '::-webkit-scrollbar-track': {
      marginTop: '14px',
      marginBottom: '14px',
    },
  }),
});

export default getCustomStyles;
