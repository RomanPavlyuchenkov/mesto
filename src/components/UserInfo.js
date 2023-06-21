export default class UserInfo{
  constructor(data){
    this._userName =document.querySelector(data.name);
    this._userStatus = document.querySelector(data.about);
    this._userAvatar = document.querySelector('.profile__avatar')
  }
  getUserInfo(){
    return{
      name:this._userName.textContent,
      about:this._userStatus.textContent
    }
  }

  setUserInfo(data){
    this._userName.textContent = data.name;
    this._userStatus.textContent= data.about
    this._userAvatar.src = data.avatar

  }
}
