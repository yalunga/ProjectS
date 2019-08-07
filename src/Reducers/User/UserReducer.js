import {
  LOGIN,
  LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
} from './UserActions';

const initialState = {
  user: null,
  loginErrors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginErrors: action.payload,
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginErrors: initialState.loginErrors,
      };
    default:
      return state;
  }
};
