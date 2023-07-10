import {
  loginActions,
  loginActionsTypes,
  loginState,
  IUser,
} from "../../models/LOGIN_TYPES";

const initialState: loginState = {
  isLogin: false,
  user: {} as IUser,
  error: null,
  isloading: false,
};

export const loginReducer = (
  state = initialState,
  action: loginActions
): loginState => {
  switch (action.type) {
    case loginActionsTypes.SET_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case loginActionsTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case loginActionsTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case loginActionsTypes.SET_LOADING:
      return {
        ...state,
        isloading: action.payload,
      };
    default:
      return state;
  }
};
