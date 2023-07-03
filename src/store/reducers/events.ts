import {
  EventActions,
  EventState,
  eventActionTypes,
} from "../../models/EVENT_TYPES";

const initialState: EventState = {
  guests: [],
  events: [],
};

export const eventReducer = (
  state = initialState,
  action: EventActions
): EventState => {
  switch (action.type) {
    case eventActionTypes.SET_GUESTS:
      return {
        ...state,
        guests: action.payload,
      };
    case eventActionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};
