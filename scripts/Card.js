import{popupWithImages,popupImg, popupTitle,openPopup} from "./index.js";
export const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    const templeateElements = document.querySelector('#template-elements').content;
    const cardElement = templeateElements.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }
  generateCard(){
    this._element = this._getTemplate();
    this._clickLike();
    this._clickDeleteButton();
    this._clickImg();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__img').src = this._link;
    this._element.querySelector('.elements__img').alt = this._name;
    return this._element;
  }
  _likeElement(){
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }
  _clickLike(){
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._likeElement();
    });
  }
  _deleteElement(){
    this._element.remove();
  }
  _clickDeleteButton(){
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteElement();
    });
  }
  _openPopupImages(){
    openPopup(popupWithImages);
    popupImg.src = this._link;
    popupImg.alt =  this._name;
    popupTitle.textContent =  this._name;
  }
  _clickImg(){
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._openPopupImages();
    });
  }
}


