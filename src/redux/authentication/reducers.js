var initialState = {
  checkedLogin: true,
  isLoggedIn: true,    // refers to revibe, youtube, and spotify
  user: {
    username: "",
    email: "",
    artistId: "",
    displayName: "",
    artistImage: "",
    artistAboutMe: "",
    country: "",
    city: "",
    zipcode: "",
  },
  error: null,
}


export const authenticationReducer = (state=initialState, action) => {
    switch (action.type) {

        case "CHECK_AUTHENTICATION":
          return { ...state,
            checkedLogin: action.checkedLogin
          };
        case 'IS_AUTHENTICATED':
            return {
              ...state,
              isLoggedIn: action.isLoggedIn
            };
        case 'LOGIN_USER':
          return {
            ...state,
            checkedLogin: action.checkedLogin,
            isLoggedIn: action.isLoggedIn,
          };
        case 'LOGOUT_USER':
          return {
            ...state,
            isLoggedIn: false,
          };
        case 'UPDATE_USER_DATA':
          return {
            ...state,
            user: action.user,
          }
        case 'REMOVE_USER_DATA':
          return {
            ...state,
            user: {
              username: "",
              email: "",
              artistId: "",
              displayName: "",
              artistImage: "",
              artistAboutMe: "",
              country: "",
              city: "",
              zipcode: "",
            },
          }
        case 'ERROR':
            return {
              ...state,
              error: action.error
            };
        default:
            return state;
    }
};