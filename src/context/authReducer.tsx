import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeName'; payload: string};

//Genera Estado
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'changeName':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
