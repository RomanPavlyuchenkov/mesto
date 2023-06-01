import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._text = this.popupSelector.querySelector('.popup__title-image');
    this._img = this.popupSelector.querySelector('.popup__img')
  };

  openPopup( name, link ) {
    super.openPopup();
      this._text.textContent = name;
      this._img.src = link;
      this._img.alt = name;
  };
};
