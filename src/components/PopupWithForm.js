import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(_popup, formSubmit){
    super(_popup);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__btn-save');
    this._inputList = this._form.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    const inputObject ={};
    this._inputList.forEach((input) => {
      inputObject[input.name] = input.value
    });
    return inputObject
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
       this._formSubmit(this._getInputValues());
    });
  };


  closePopup() {
    super.close();
    this._form.reset();
  }

}
