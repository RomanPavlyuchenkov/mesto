export default class Popup {
  constructor (popupSelector) {
    this.popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  openPopup() {
    this.popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  closePopup() {
    this.popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      document.querySelector('.popup_opened');
      this.closePopup();
     };
  };

  setEventListeners() {
    this.popupSelector.querySelector('.popup__close').addEventListener('click', () => {
      this.closePopup();
    });
    this.popupSelector.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')){
        document.querySelector('.popup_opened')
        this.closePopup()
      }
    });
  };
};
