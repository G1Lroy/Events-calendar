import { IUser } from "./LOGIN_TYPES";

export interface EventState {
  guests: IUser[];
  events: IEvents[];
}

export interface IEvents {
  author: string;
  guest: string;
  date: string;
  description: string;
}

export enum eventActionTypes {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface setGuestsAction {
  type: eventActionTypes.SET_GUESTS;
  payload: IUser[];
}
export interface setEventsAction {
  type: eventActionTypes.SET_EVENTS;
  payload: IEvents[];
}

export type EventActions = setGuestsAction | setEventsAction;
