export const addAccessToken = (token) =>{
    return {
        type: 'ADD_ACCESS_TOKEN',
        payload: token
    }
  }
  
  export const storeUserInfo = (obj) =>{
    return {
        type: 'USER_INFO',
        payload: obj
    }
  }
  