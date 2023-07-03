import React, { FC } from "react";
import { Calendar } from "antd";
import { IEvents } from "../models/EVENT_TYPES";

interface EventsCalendarProps {
  events: IEvents[];
}

const EventsCalendar: FC<EventsCalendarProps> = () => {
  return <Calendar></Calendar>;
};

export default EventsCalendar;
