import handleSubmit from './formHandler';

const startApp = () => {
  const formElement = document.querySelector('form');
  formElement.addEventListener('submit', handleSubmit);
};

export default startApp;
