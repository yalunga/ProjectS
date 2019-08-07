import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';

export const login = async (dispatch, email, password, navigation) => {
  const data = {
    user: {
      email,
      password,
    },
  };
  fetch('http://localhost:3100/api/users/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(async (response) => {
      if (response.errors) {
        dispatch({ type: LOGIN_ERROR, payload: response.errors });
      }
      if (response.user) {
        dispatch({ type: LOGIN, payload: response.user });
        await AsyncStorage.setItem('user', response.user);
        navigation.navigate({ routeName: 'Home' });
      }
    })
    .catch(err => console.log(err));
};

export const clearLoginErrors = () => ({ type: CLEAR_LOGIN_ERROR });
