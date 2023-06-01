import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, formSubmit){
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this.popupSelector.querySelector('.popup__form');
  }
  _getInputValues() {
    const inputList = this._form.querySelectorAll('.popup__input');
    const inputObject ={};
    inputList.forEach((input) => {
      inputObject[input.name] = input.value
    });
    return inputObject
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  };
  closePopup() {
    super.closePopup();
    this._form.reset();
  }

}
