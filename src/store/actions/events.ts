import {
  IEvents,
  eventActionTypes,
  setEventsAction,
  setGuestsAction,
} from "../../models/EVENT_TYPES";
import { IUser } from "../../models/LOGIN_TYPES";
import { AppDispatch } from "..";
import axios from "axios";

export const eventCreators = {
  setGuests: (payload: IUser[]): setGuestsAction => ({
    type: eventActionTypes.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvents[]): setEventsAction => ({
    type: eventActionTypes.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const respose = await axios.get<IUser[]>("./users.json");
      dispatch(eventCreators.setGuests(respose.data));
    } catch (error) {
      console.log(error);
    }
  },
};
