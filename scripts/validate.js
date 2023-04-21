
function showInputError (config,formElement, inputElement, errorMessage){
  inputElement.classList.add(config.inputErrorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
}

function hideInputError(config,formElement, inputElement){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

function checkInputValidity (config,formElement, inputElement){
  if (!inputElement.validity.valid) {
    showInputError(config,formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config,formElement, inputElement);
  }
};


function setEventListeners (config,formElement){
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(config,inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(config,formElement, inputElement);
      toggleButtonState(config,inputList, buttonElement);
    });
  });
}


function enableValidation(config){
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    formElement.addEventListener('submit', function () {
      formElement.reset()
      toggleButtonState(config,inputList, buttonElement);
    });
    setEventListeners(config,formElement);
  });
}


//валидация кнопки
function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
   return !inputElement.validity.valid;
 });
}

function toggleButtonState (config,inputList,buttonElement){
  if (hasInvalidInput(inputList)) {
   buttonElement.classList.add(config.inactiveButtonClass);
   buttonElement.setAttribute('disabled','');
 } else {
   buttonElement.classList.remove(config.inactiveButtonClass);
   buttonElement.removeAttribute('disabled')
 }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'popup__input_type_error'
});
