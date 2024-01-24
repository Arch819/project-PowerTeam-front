const addIdForPathname = id => {
  const currentPath = window.location.pathname;
  const newPath = `${currentPath}/${id}`;
  window.history.replaceState({}, '', newPath);
};

export default addIdForPathname;
