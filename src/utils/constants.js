export const cardContainer =  document.querySelector('.elements');
//popup-edit-name
export const popupEditNameOpen = document.querySelector('.profile__edit-button');
export const popupEditName = document.querySelector('.popup_type_edit-name');
export const userNameInput = popupEditName.querySelector('#popup-edit-name-input-name');
export const userNameStatus = popupEditName.querySelector('#popup-edit-name-input-status');
//popup-add-card
export const popupAddCardOpen = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup_type_add-card');
// popup-avatar
export const popupUpdateAvatarOpen = document.querySelector('.profile__avatar-edit');
export const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
export const avatar = document.querySelector('.profile__avatar')

export const enableValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'popup__input_type_error'
});
