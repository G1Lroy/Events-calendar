import React, { FC } from "react";
import { Calendar } from "antd";
import { IEvents } from "../models/EVENT_TYPES";
import { Moment } from "moment";

interface EventsCalendarProps {
  events: IEvents[];
}

const EventsCalendar: FC<EventsCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formattedDate = value.format("YYYY-MM-DD");
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formattedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventsCalendar;
