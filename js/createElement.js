const createElement = (tag, classNames, textContent = '', styles = {}) => {
    const element = document.createElement(tag);
    if (classNames) element.classList.add(...classNames.split(' '));
    if (textContent) element.textContent = textContent;
    Object.assign(element.style, styles);
    return element;
};
  
export default createElement;