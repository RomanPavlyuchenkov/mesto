
export default class Card {
  constructor( data, handleCardClick,myId,handleDeleteCard,handleLike) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._cardId = data._id;
    this._myId = myId
    this._ownerId = data.owner._id
    this._handleDeleteCard =handleDeleteCard
    this._handleLike = handleLike
  }

  _getTemplate() {
    const templeateElements = document.querySelector('#template-elements').content;
    const cardElement = templeateElements.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }
  generateCard(){
    this._element = this._getTemplate();
    this._img = this._element.querySelector('.elements__img')
    this._like = this._element.querySelector('.elements__like')
    this._countLikes = this._element.querySelector('.elements__like-count')
    this._countLikes.textContent =this._likes.length
    this._btnDelete = this._element.querySelector('.elements__delete')
    this._initClickLike();
    this._initClikDeleteButton();
    this._initClickImg();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._img.src = this._link;
    this._img.alt = this._name;
    this.updateLikes(this._likes)
    return this._element;
  }


  _likeElement(){
    this._handleLike(this)//this это card
  }
  _initClickLike(){
    this._like.addEventListener('click', () => {
      this._likeElement();
    });
  }

  updateLikes(likes) {
    this._likes = likes;
    this.isLiked = this._likes.some((like) => like._id === this._myId._id);
    this._like.classList.toggle('elements__like_active', this.isLiked);
    this._countLikes.textContent = this._likes.length;
  };
  deleteElement(){
    this._element.remove();
    this._element = null;
  }
  _initClikDeleteButton(){
    if( this._myId._id !==  this._ownerId){
      this._btnDelete.style.display = 'none'
    }
    this._btnDelete.addEventListener('click', () => {
      this._handleDeleteCard(this)
    });
  }

  _initClickImg(){
    this._img.addEventListener('click', () => {
       this._handleCardClick(this._name, this._link);
    });
  }
}



