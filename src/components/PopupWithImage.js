import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor (_popup) {
    super(_popup);
    this._text = this._popup.querySelector('.popup__title-image');
    this._img = this._popup.querySelector('.popup__img')
  };

  openPopup( name, link ) {
    super.open();
      this._text.textContent = name;
      this._img.src = link;
      this._img.alt = name;
  };
};
