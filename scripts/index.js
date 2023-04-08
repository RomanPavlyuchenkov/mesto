//popup-edit-name
const popupEditNameOpen = document.querySelector('.profile__edit-button');
const popupEditName = document.querySelector('.popup_type_edit-name');
const popupEditNameClose = popupEditName.querySelector('.popup__close_type_edit-name');
const userName = document.querySelector('.profile__title');
const userStatus = document.querySelector('.profile__subtitle');
const userNameInput = popupEditName.querySelector('#popup-edit-name__input-name');
const userNameStatus = popupEditName.querySelector('#popup-edit-name__input-status');
const saveEditName = popupEditName.querySelector('.popup__form_type_edit-name');
//popup-add-card
const popupAddCardOpen = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close_type_add-card');
const saveCard = popupAddCard.querySelector('.popup__form_type_add-card');


function closePopup(popupRemove){
  popupRemove.classList.remove('popup_opened');
};

function openPopup (popupAdd){
  popupAdd.classList.add('popup_opened');
};

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
  const userCardNameInput = popupAddCard.querySelector('#popup-add-card__input-name').value;
  const userCardInputLink = popupAddCard.querySelector('#popup-add-card__input-link').value;

  const cardData ={
    name: userCardNameInput,
    link: userCardInputLink
  };
  renderElement (createElement(cardData));
  closePopup(popupAddCard);
});

popupAddCardClose.addEventListener('click',function(){
  closePopup(popupAddCard);
});


/* ----Добавляем карточки---- */
const templeateElements = document.querySelector('#template-elements').content;
const gridElements = document.querySelector('.elements');

initialElements.reverse().forEach((element)=>{
  renderElement (createElement(element));
});

//принимает массив и создает елемент
function createElement (elementData){
  const cardElement = templeateElements.querySelector('.elements__element').cloneNode(true);
  const imgElement = cardElement.querySelector('.elements__img');
  const textElement = cardElement.querySelector('.elements__title');
  const likeButton = cardElement.querySelector('.elements__like');
  const deleteButton = cardElement.querySelector('.elements__delete');
  imgElement.src = elementData.link;
  imgElement.alt = elementData.name;
  textElement.textContent = elementData.name;

  //открыть и закрыть картинку
  const popupWithImages = document.querySelector('.popup_type_image');
  const popupImagesClosed = popupWithImages.querySelector('.popup__close_type_image');
  function openPopupImages (){
    const popupImg = popupWithImages.querySelector('.popup__img');
    const popupTitle = popupWithImages.querySelector('.popup__title_type_image');
    openPopup(popupWithImages);
    popupImg.src = elementData.link;
    popupImg.alt = elementData.name;
    popupTitle.textContent = elementData.name;
  }
  imgElement.addEventListener('click',openPopupImages);
  popupImagesClosed.addEventListener('click',function(){closePopup(popupWithImages)});
  //удалить и поставить лайк
  function likeElement(){
    likeButton.classList.toggle('elements__like_active')
  };
  likeButton.addEventListener('click',likeElement);
  function deleteElement(){
    cardElement.remove()
  };
  deleteButton.addEventListener('click',deleteElement)

  return cardElement;
};


//добавляем эементы в dom
function renderElement (cardElement){
  gridElements.prepend(cardElement);
};



