
export default class Card {
  constructor( data, handleCardClick ) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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
    this._initClickLike();
    this._initClikDeleteButton();
    this._initClickImg();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._img.src = this._link;
    this._img.alt = this._name;
    return this._element;
  }
  _likeElement(){
    this._like.classList.toggle('elements__like_active');
  }
  _initClickLike(){
    this._like.addEventListener('click', () => {
      this._likeElement();
    });
  }
  _deleteElement(){
    this._element.remove();
    this._element = null
  }
  _initClikDeleteButton(){
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteElement();
    });
  }

  _initClickImg(){
    this._img.addEventListener('click', () => {
       this._handleCardClick(this._name, this._link);
    });
  }
}



