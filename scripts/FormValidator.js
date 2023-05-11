

export const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'popup__input_type_error'
});

export class FormValidator{
  constructor(config,formElement){
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelectorr = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = formElement.querySelector(config.formSelector)
  }

  enableValidation(){
    const inputList = Array.from(this._form.querySelectorAll( this._inputSelector));
    const buttonElement = this._form.querySelector(this._submitButtonSelectorr);
    this._setEventListeners();
    this._form.addEventListener('submit',  () => {
      this._form.reset();
      this._toggleButtonState(inputList, buttonElement);
    });
  }

  _setEventListeners(){
    const inputList = Array.from(this._form.querySelectorAll( this._inputSelector));
    const buttonElement = this._form.querySelector(this._submitButtonSelectorr);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  ()=> {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid){
      this._showInputError( inputElement, inputElement.validationMessage);
    }
    else {
      this._hideInputError( inputElement);
    }

  }
  _showInputError(inputElement, errorMessage){
    inputElement.classList.add(this._inputErrorClass);
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
  }
  _hideInputError(inputElement){
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
  //валидация кнопки
  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
   });
  }

  _toggleButtonState (inputList,buttonElement){
    if (this._hasInvalidInput(inputList)) {
     buttonElement.classList.add( this._inactiveButtonClass);
     buttonElement.setAttribute('disabled','');
   } else {
     buttonElement.classList.remove( this._inactiveButtonClass);
     buttonElement.removeAttribute('disabled')
   }
  }

}


