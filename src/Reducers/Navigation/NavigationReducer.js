import { Navigator } from '../../Navigator';
import { NavigationActions } from 'react-navigation';

const initialAction = { type: NavigationActions.INIT }
const initialState = Navigator.router.getStateForAction(initialAction);

export default (state = initialState, action) => {
  return state;
}