import "../pages/index.css";
import Card  from "../components/Card.js";
import Section  from "../components/Section.js";
import PopupWithImage  from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import FormValidator from "../components/FormValidator.js";
import{enableValidation,popupEditNameOpen,popupEditName
,userNameInput,userNameStatus, popupAddCardOpen,popupAddCard,popupUpdateAvatar,popupUpdateAvatarOpen,
avatar
} from "../utils/constants.js";
import Api from "../components/Api";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers:{
    authorization:'ced33b28-8405-4e3c-9739-0f2a35abfd60'
  }
})
let myId = {}

Promise.all([
  api.getCards(), // Запрашиваем массив карточек с сервера
  api. getUserInfo() // Запрашиваем данные юзера
])
.then(([cards, user]) => {
  myId = user; // наполняем объект свойствами
  section.renderItems(cards)
  userInfo.setUserInfo(user);
}).catch((err) => console.log(`catch: ${err}`))

//Удаляем карточки с сервера
const popupWithDeleteCard = new PopupWithConfirmation('.popup_type_delete-card',apiCardDelete)
popupWithDeleteCard.setEventListeners()

function apiCardDelete(card){
  api.deleteCard(card._cardId).then(() => {
    card.deleteElement();
  }).then(() => {
    popupWithDeleteCard.closePopup();
  }).catch((err) => console.log(`catch: ${err}`))

}
function handleDeleteCard(card){
  popupWithDeleteCard.open(() => {
    apiCardDelete(card)
  });

}
//Поставить - снять лайк
function handleLike(card) {
  if(card.isLiked) {
    api.deleteLike(card._cardId)
    .then((data) => card.updateLikes(data.likes))
    .catch((err) => console.log(`catch: ${err}`));
  } else {
    api.addLike(card._cardId)
    .then((data) => card.updateLikes(data.likes))
    .catch((err) => console.log(`catch: ${err}`));
  }
};

 // Попап с каритинкой
  const openPopupWithImage = new PopupWithImage('.popup_type_image');
  openPopupWithImage.setEventListeners();

  function handleCardClick(name, link) {
   openPopupWithImage.openPopup( name, link);
  };

// Попап с аватаром
const popupWithUpdateAvatar = new PopupWithForm('.popup_type_update-avatar', submitAvatar);
popupWithUpdateAvatar.setEventListeners();

 function submitAvatar(data){
  renderLoading(popupUpdateAvatar, true);
  api.updateAvatar(data).then((newAvatar)=>{
    avatar.src = newAvatar.avatar
    popupWithUpdateAvatar.closePopup()
  })
  .catch((err)=>console.log(`catch: ${err}`))
  .finally(() => {
    renderLoading(popupUpdateAvatar);
  });
 }

 popupUpdateAvatarOpen.addEventListener('click', () => {
  popupWithUpdateAvatar.open()
  avatarValidator.resetValidationState()
});


  // Попап с добавлением карточек
  const popupWithFormAddCard = new PopupWithForm('.popup_type_add-card', submitAddCard);
  popupWithFormAddCard.setEventListeners();
  function submitAddCard(data) {
    renderLoading(popupAddCard, true);
      api.postCard(data).then((post)=>{
      renderElement(post);
      popupWithFormAddCard.closePopup()
   })
   .catch((err)=>console.log(`catch: ${err}`))
   .finally(() => {
    renderLoading(popupAddCard,false,'Создать');
  });
  };

  popupAddCardOpen.addEventListener('click', () => {
    popupWithFormAddCard.open();
    cardValidator.resetValidationState()
  });


  // Попап с редактированием профиля
 const popupWithFormEditName = new PopupWithForm('.popup_type_edit-name',submitEditName );
 popupWithFormEditName.setEventListeners();
  const userInfo = new UserInfo({name:".profile__title",about:".profile__subtitle"})


 function submitEditName(data) {
  renderLoading(popupEditName, true);
 api.updateUserInfo(data).then((patch)=>{//отправляет запрос на сервер
    userInfo.setUserInfo(patch)
    popupWithFormEditName.closePopup()
 })
 .catch((err)=>console.log(`catch: ${err}`))
 .finally(() => {
  renderLoading(popupEditName);

});
};
popupEditNameOpen.addEventListener('click', () => {
  popupWithFormEditName.open();
  profileValidator.resetValidationState();
  const userInfoData = userInfo.getUserInfo();//объект с инфой о пользователе на странице.
  userNameInput.value = userInfoData.name;
  userNameStatus.value = userInfoData.about
});


//добавить card
const section = new Section('.elements',renderElement);
 function  renderElement (element){
  const card = new Card(element,handleCardClick,myId,handleDeleteCard,handleLike);
  const cardElement = card.generateCard();
  section.addItem(cardElement);
}


//валидация
 const profileValidator = new FormValidator(enableValidation,popupEditName);
profileValidator.enableValidation();

const cardValidator = new FormValidator(enableValidation,popupAddCard);
cardValidator.enableValidation();

const avatarValidator = new FormValidator(enableValidation,popupUpdateAvatar);
avatarValidator.enableValidation();

// Функция меняет текст кнопки
const renderLoading = (popup, isLoading = false,originalText='Сохранить') => {
  const currentActiveButton = popup.querySelector('.popup__btn-save');
  if (isLoading) {
    currentActiveButton.textContent = "Сохранение...";
  } else {
    currentActiveButton.textContent = originalText;
  }
};
