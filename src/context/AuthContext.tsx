// @packages
import { createContext, useReducer } from 'react';

// @scripts
import { authReducer } from './authReducer';

export interface IAuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: IAuthState = {
  isLoggedIn: false,
};

export interface IAuthContext {
  authState: IAuthState;
  signIn: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({ } as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authState, setAuthState] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    setAuthState({
      type: 'signIn',
    });
  };

  const logout = () => {
    setAuthState({
      type: 'logout',
    });
  };

  return (
    <AuthContext.Provider value={{ authState, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

