import { useDispatch } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";
import { allActionCreators } from "../store/actions";
import { Dispatch } from "redux";

export const useActions = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
