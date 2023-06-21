import PopupWithForm from '../components/PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm {
  constructor (_popup) {
    super(_popup);
  };
  open(onSubmit) {
  super.open();
  this._formSubmit = onSubmit;
  };
};
