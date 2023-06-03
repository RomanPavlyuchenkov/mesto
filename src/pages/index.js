import "../pages/index.css";
import Card  from "../components/Card.js";
import Section  from "../components/Section.js";
import PopupWithImage  from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo";
import FormValidator from "../components/FormValidator.js";
import{enableValidation,initialElements,popupEditNameOpen,popupEditName
,userNameInput,userNameStatus, popupAddCardOpen,popupAddCard
} from "../utils/constants.js";

  const openPopupWithImage = new PopupWithImage('.popup_type_image');
  openPopupWithImage.setEventListeners();

  function handleCardClick(name, link) {
   openPopupWithImage.openPopup( name, link);
  };

  // Попап с добавлением карточек
  const popupWithFormAddCard = new PopupWithForm('.popup_type_add-card', submitAddCard);
  popupWithFormAddCard.setEventListeners();

  function submitAddCard(data) {
    renderElement(data);
    popupWithFormAddCard.closePopup();
  };

  popupAddCardOpen.addEventListener('click', () => {
    popupWithFormAddCard.open();
    cardValidator.resetValidationState()
  });


  // Попап с редактированием профиля
 const popupWithFormEditName = new PopupWithForm('.popup_type_edit-name',submitEditName );
 popupWithFormEditName.setEventListeners();
  const userInfo = new UserInfo({name:".profile__title",status:".profile__subtitle"})


 function submitEditName(data) {
  userInfo.setUserInfo(data)
  popupWithFormEditName.closePopup();
};
popupEditNameOpen.addEventListener('click', () => {
  popupWithFormEditName.open();
  profileValidator.resetValidationState();
  const userInfoData = userInfo.getUserInfo();//объект с инфой о пользователе на странице.
  userNameInput.value = userInfoData.name;
  userNameStatus.value = userInfoData.status
});


//добавить card
const section = new Section({items: initialElements, renderer: renderElement}, '.elements');

 function  renderElement (element){
  const card = new Card(element,handleCardClick);
  const cardElement = card.generateCard();
  section.addItem(cardElement);
}
section.renderItems();

//валидация
 const profileValidator = new FormValidator(enableValidation,popupEditName);
profileValidator.enableValidation();

const cardValidator = new FormValidator(enableValidation,popupAddCard);
cardValidator.enableValidation();

