const deleteIdForPathname = id => {
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace(new RegExp(`/${id}.*$`), '');
  window.history.replaceState({}, '', newPath);
};

export default deleteIdForPathname;
