import React, {createContext, useReducer} from 'react';
import authReducer from './authReducer';

//=======================================================================
//Definir como luce (mi estado inicial), que informacion tendre aqui(info que se manejara en este context)
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};
//=======================================================================

//=======================================================================
//Es lo que el context nos dara en el provider
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUsername: (name: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = (): void => {
    dispatch({type: 'signIn'});
  };

  const changeFavIcon = (iconName: string): void => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = (): void => {
    dispatch({type: 'logout'});
  };

  const changeUsername = (name: string) => {
    dispatch({type: 'changeName', payload: name});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, changeFavIcon, logout, changeUsername}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
//=======================================================================
