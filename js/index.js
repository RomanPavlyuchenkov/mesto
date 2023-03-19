const popupOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const userName = document.querySelector('.profile__title');
const userStatus = document.querySelector('.profile__subtitle');
const userNameInput = popup.querySelector('.popup__input-name');
const userNameStatus = popup.querySelector('.popup__input-status');
const save = popup.querySelector('.popup__form');

popupOpen.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userNameStatus.value = userStatus.textContent;
});

popupClose.addEventListener('click',function(){
  popup.classList.remove('popup_opened');
});

save.addEventListener('submit',function(event){
  event.preventDefault();
  userName.textContent = userNameInput.value;
  userStatus.textContent =userNameStatus.value;
  popup.classList.remove('popup_opened');
});
