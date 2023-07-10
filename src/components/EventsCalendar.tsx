import React, { FC, useState } from "react";
import { Badge, Calendar, Card, Popover } from "antd";
import { IEvents } from "../models/EVENT_TYPES";
import { Moment } from "moment";

interface EventsCalendarProps {
  events: IEvents[];
}

const EventsCalendar: FC<EventsCalendarProps> = (props) => {
  const dateCellRender = (value: Moment) => {
    const formattedDate = value.format("YYYY-MM-DD");
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formattedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <Card size="small" key={index}>
            <Popover
              title={`Event Details`}
              content={
                <div>
                  <p>
                    <strong>Author:</strong> {ev.author}
                  </p>
                  <p>
                    <strong>Guest:</strong> {ev.guest}
                  </p>
                </div>
              }
            >
              <Badge status={ev.status} text={ev.description} />
            </Popover>
          </Card>
        ))}
      </div>
    );
  };

  return (
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    /* @ts-ignore */
    <Calendar dateCellRender={dateCellRender} />
  );
};

export default EventsCalendar;
