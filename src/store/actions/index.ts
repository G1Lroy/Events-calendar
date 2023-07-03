import { eventCreators } from "./events";
import { loginCreators } from "./login";

export const allActionCreators = {
  ...loginCreators,
  ...eventCreators,
};
