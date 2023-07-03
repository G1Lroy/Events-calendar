import axios from "axios";
import { AppDispatch } from "./../index";
import {
  IUser,
  loginActions,
  loginActionsTypes,
} from "../../models/LOGIN_TYPES";

export const loginCreators = {
  setLogin: (login: boolean): loginActions => ({
    type: loginActionsTypes.SET_LOGIN,
    payload: login,
  }),
  setUser: (user: IUser): loginActions => ({
    type: loginActionsTypes.SET_USER,
    payload: user,
  }),
  setError: (error: string): loginActions => ({
    type: loginActionsTypes.SET_ERROR,
    payload: error,
  }),
  setLoading: (isloading: boolean): loginActions => ({
    type: loginActionsTypes.SET_LOADING,
    payload: isloading,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(loginCreators.setLoading(true));

        await new Promise((res) => setTimeout(res, 1000));

        const response = await axios.get<IUser[]>("./users.json");
        const loggedUsers = response.data.find(
          (user) => user.username === username && user.password === password
        );
        if (loggedUsers) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("user", JSON.stringify(loggedUsers));
          dispatch(loginCreators.setLogin(true));
          dispatch(loginCreators.setUser(loggedUsers));
        } else {
          dispatch(loginCreators.setError("Пользователь не найден"));
        }
        dispatch(loginCreators.setLoading(false));
      } catch (error) {
        dispatch(loginCreators.setError("Error login"));
      }
    },
  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem("isLogin");
    dispatch(loginCreators.setLogin(false));
    dispatch(loginCreators.setUser({} as IUser));
  },
};
