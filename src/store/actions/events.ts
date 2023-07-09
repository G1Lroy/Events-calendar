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
  createEvent: (newEvent: IEvents) => async (dispatch: AppDispatch) => {
    try {
      const eventData = localStorage.getItem("events") || "[]";
      const eventsArr = JSON.parse(eventData) as IEvents[];
      eventsArr.push(newEvent);
      dispatch(eventCreators.setEvents(eventsArr));
      localStorage.setItem("events", JSON.stringify(eventsArr));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: (loggedUser: string) => async (dispatch: AppDispatch) => {
    try {
      const data = localStorage.getItem("events") || "[]";
      const events = JSON.parse(data) as IEvents[];
      const allowedEvents = events.filter(
        (e) => e.author === loggedUser || e.guest === loggedUser
      );
      dispatch(eventCreators.setEvents(allowedEvents));
    } catch (error) {
      console.log(error);
    }
  },
};
