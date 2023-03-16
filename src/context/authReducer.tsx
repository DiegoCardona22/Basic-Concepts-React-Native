// @scripts
import { IAuthState } from './AuthContext';

export type AuthAction = { type: 'signIn' } | { type: 'logout' };

export const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'admin',
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
      };
    default:
      return state;
  }
};
