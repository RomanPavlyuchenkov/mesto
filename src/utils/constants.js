export const cardContainer =  document.querySelector('.elements');
//popup-edit-name
export const popupEditNameOpen = document.querySelector('.profile__edit-button');
export const popupEditName = document.querySelector('.popup_type_edit-name');
export const popupEditNameClose = popupEditName.querySelector('.popup__close_type_edit-name');
export const userName = document.querySelector('.profile__title');
export const userStatus = document.querySelector('.profile__subtitle');
export const userNameInput = popupEditName.querySelector('#popup-edit-name-input-name');
export const userNameStatus = popupEditName.querySelector('#popup-edit-name-input-status');
export const saveEditName = popupEditName.querySelector('.popup__form_type_edit-name');
//popup-add-card
export const popupAddCardOpen = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const userCardNameInput = popupAddCard.querySelector('#popup-add-card-input-name');
export const userCardInputLink = popupAddCard.querySelector('#popup-add-card-input-link');
export const popupAddCardClose = popupAddCard.querySelector('.popup__close_type_add-card');
export const saveCard = popupAddCard.querySelector('.popup__form_type_add-card');
export const popupWithImages = document.querySelector('.popup_type_image');
export const popupImagesClosed = popupWithImages.querySelector('.popup__close_type_image');
export const popupImg = popupWithImages.querySelector('.popup__img');
export const popupTitle = popupWithImages.querySelector('.popup__title-image');

export const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'popup__input_type_error'
});

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
