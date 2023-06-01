
export default class Card {
  constructor( data, handleCardClick ) {
    this._name = data.name;
    this._link = data.link;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const templeateElements = document.querySelector('#template-elements').content;
    const cardElement = templeateElements.querySelector('.elements__element').cloneNode(true);
    return cardElement;
  }
  generateCard(){
    this._element = this._getTemplate();
    this._clickLike();
    this._clickDeleteButton();
    this._clickImg();
    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__img').src = this._link;
    this._element.querySelector('.elements__img').alt = this._name;
    return this._element;
  }
  _likeElement(){
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }
  _clickLike(){
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._likeElement();
    });
  }
  _deleteElement(){
    this._element.remove();
    this._element = null
  }
  _clickDeleteButton(){
    this._element.querySelector('.elements__delete').addEventListener('click', () => {
      this._deleteElement();
    });
  }

  _clickImg(){
    this._element.querySelector('.elements__img').addEventListener('click', () => {
       this.handleCardClick(this._name, this._link);
    });
  }
}



