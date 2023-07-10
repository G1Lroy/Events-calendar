export interface loginState {
  isLogin: boolean;
  user: IUser;
  isloading: boolean;
  error: null | string;
}

export interface IUser {
  username: string;
  password: string;
}

export enum loginActionsTypes {
  SET_LOGIN = "SET_LOGIN",
  SET_LOGOUT = "SET_LOGOUT",
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
}

interface setLogin {
  type: loginActionsTypes.SET_LOGIN;
  payload: boolean;
}

interface setUser {
  type: loginActionsTypes.SET_USER;
  payload: IUser;
}
interface setError {
  type: loginActionsTypes.SET_ERROR;
  payload: string;
}
interface setLoading {
  type: loginActionsTypes.SET_LOADING;
  payload: boolean;
}

export type loginActions = setLogin | setUser | setError | setLoading;
