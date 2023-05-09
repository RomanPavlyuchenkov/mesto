//popup-edit-name
const popupEditNameOpen = document.querySelector('.profile__edit-button');
const popupEditName = document.querySelector('.popup_type_edit-name');
const popupEditNameClose = popupEditName.querySelector('.popup__close_type_edit-name');
const userName = document.querySelector('.profile__title');
const userStatus = document.querySelector('.profile__subtitle');
const userNameInput = popupEditName.querySelector('#popup-edit-name-input-name');
const userNameStatus = popupEditName.querySelector('#popup-edit-name-input-status');
const saveEditName = popupEditName.querySelector('.popup__form_type_edit-name');
//popup-add-card
const popupAddCardOpen = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const userCardNameInput = popupAddCard.querySelector('#popup-add-card-input-name');
const userCardInputLink = popupAddCard.querySelector('#popup-add-card-input-link');
const popupAddCardClose = popupAddCard.querySelector('.popup__close_type_add-card');
const saveCard = popupAddCard.querySelector('.popup__form_type_add-card');
const popupWithImages = document.querySelector('.popup_type_image');
const popupImagesClosed = popupWithImages.querySelector('.popup__close_type_image');
const popupImg = popupWithImages.querySelector('.popup__img');
const popupTitle = popupWithImages.querySelector('.popup__title-image');
popupImagesClosed.addEventListener('click',function(){closePopup(popupWithImages)});

function closePopup(popupRemove){
  popupRemove.classList.remove('popup_opened');
  document.removeEventListener('keydown',closePopupEsc);
  popupRemove.removeEventListener('click',closePopupOverlay)
};

function openPopup (popupAdd){
  popupAdd.classList.add('popup_opened');
  document.addEventListener('keydown',closePopupEsc )
  popupAdd.addEventListener('click',closePopupOverlay)
};

function  closePopupOverlay (evt){
  if(evt.target.classList.contains('popup_opened')){
    const popup = document.querySelector('.popup_opened')
    closePopup(popup)
  }
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup)
  }
}

popupEditNameOpen.addEventListener('click', function(){
  openPopup(popupEditName)
  userNameInput.value = userName.textContent;
  userNameStatus.value = userStatus.textContent;
});

popupEditNameClose.addEventListener('click',function(){
  closePopup(popupEditName);
});

saveEditName.addEventListener('submit',function(event){
  event.preventDefault();
  userName.textContent = userNameInput.value;
  userStatus.textContent =userNameStatus.value;
  closePopup(popupEditName);
});


/* ----popup-add-card---- */
popupAddCardOpen.addEventListener('click', function (){
  openPopup(popupAddCard)
})

saveCard.addEventListener('submit',function(event){
  event.preventDefault();
  const userCardNameInputValue = userCardNameInput.value
  const userCardInputLinkValue = userCardInputLink.value
  const cardData ={
    name: userCardNameInputValue,
    link: userCardInputLinkValue
  };
  render(cardData)
  closePopup(popupAddCard);
});

popupAddCardClose.addEventListener('click',function(){
  closePopup(popupAddCard);
});



