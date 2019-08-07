
import AsyncStorage from '@react-native-community/async-storage';

export const getLoginErrors = (state) => {
  return state.user.loginErrors;
}

export const getLoggedInUser = async (user) => {
  if (user.user) {
    return user;
  } else {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      return storedUser;
    }
    return null;
  }
}