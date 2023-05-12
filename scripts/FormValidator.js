
export default class FormValidator{
  constructor(config,formElement){
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelectorr = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._form = formElement.querySelector(config.formSelector)
    this._inputList = Array.from(this._form.querySelectorAll( this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelectorr);
  }

  enableValidation(){
    this._setEventListeners();
    this._form.addEventListener('submit',  () => {
      this._form.reset();
      this._toggleButtonState(this._inputList, this._buttonElement);
    });
  }

  _setEventListeners(){
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  ()=> {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
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

  _resetErrors(){
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement)
    })
  }

}


