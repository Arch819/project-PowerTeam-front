export const getResponsiveFontSize = () => {
  const screenWidth = window.innerWidth;
  return screenWidth >= 768 ? '16px' : '14px';
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
