export const cardContainer =  document.querySelector('.elements');
//popup-edit-name
export const popupEditNameOpen = document.querySelector('.profile__edit-button');
export const popupEditName = document.querySelector('.popup_type_edit-name');
export const userNameInput = popupEditName.querySelector('#popup-edit-name-input-name');
export const userNameStatus = popupEditName.querySelector('#popup-edit-name-input-status');
//popup-add-card
export const popupAddCardOpen = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupWithImages = document.querySelector('.popup_type_image');

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
