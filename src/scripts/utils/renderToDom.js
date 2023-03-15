const renderToDom = (domString, elementId) => {
  const element = document.querySelector(`${elementId}`);
  element.innerHTML = domString;
};

export default renderToDom;
