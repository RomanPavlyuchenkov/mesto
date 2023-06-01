export default class UserInfo{
  constructor(data){
    this._userName =data.name;
    this._userStatus = data.status;
  }
  getUserInfo(){
    return{
      name:this._userName.textContent,
      status:this._userStatus.textContent
    }
  }

  setUserInfo(data){
    this._userName.textContent = data.name;
    this._userStatus.textContent= data.status

  }
}
