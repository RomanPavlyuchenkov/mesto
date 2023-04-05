//popup-edit-name
const popupEditNameOpen = document.querySelector('.profile__edit-button');
const popupEditName = document.querySelector('.popup-edit-name');
const popupEditNameClose = popupEditName.querySelector('.popup-edit-name__close');
const userName = document.querySelector('.profile__title');
const userStatus = document.querySelector('.profile__subtitle');
const userNameInput = popupEditName.querySelector('#popup-edit-name__input-name');
const userNameStatus = popupEditName.querySelector('#popup-edit-name__input-status');
const saveEditName = popupEditName.querySelector('.popup-edit-name__form');
//popup-add-card
const popupAddCardOpen = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup-add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup-add-card__close');
const saveCard = popupAddCard.querySelector('.popup-add-card__form');


function popupClosed(popupRemove){
  popupRemove.classList.remove('popup_opened');
};

function popupOpened (popupAdd){
  popupAdd.classList.add('popup_opened');
};

popupEditNameOpen.addEventListener('click', function(){
  popupOpened(popupEditName)
  userNameInput.value = userName.textContent;
  userNameStatus.value = userStatus.textContent;
});

popupEditNameClose.addEventListener('click',function(){
  popupClosed(popupEditName);
});

saveEditName.addEventListener('submit',function(event){
  event.preventDefault();
  userName.textContent = userNameInput.value;
  userStatus.textContent =userNameStatus.value;
  popupClosed(popupEditName);
});


/* ----popup-add-card---- */
popupAddCardOpen.addEventListener('click', function (){
  popupOpened(popupAddCard)
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
  popupClosed(popupAddCard);
});

popupAddCardClose.addEventListener('click',function(){
  popupClosed(popupAddCard);
});


/* ----Добавляем карточки---- */
const templeateElements = document.querySelector('#template-elements').content;
const gridElements = document.querySelector('.elements');

initialElements.forEach((element)=>{
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
  const popupWithImages = document.querySelector('.popup-image');
  const popupImagesClosed = popupWithImages.querySelector('.popup-image__btn');
  function openedPopupImages (){
    const popupImg = popupWithImages.querySelector('.popup-image__img');
    const popupTitle = popupWithImages.querySelector('.popup-image__title');
    popupOpened(popupWithImages);
    popupImg.src = elementData.link;
    popupImg.alt = elementData.name;
    popupTitle.textContent = elementData.name;
  }
  imgElement.addEventListener('click',openedPopupImages);
  popupImagesClosed.addEventListener('click',function(){popupClosed(popupWithImages)});
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



