import React, { FC } from "react";
import { Badge, Button, Calendar, Card, Popover } from "antd";
import { IEvents } from "../models/EVENT_TYPES";
import { Moment } from "moment";
import { useActions } from "../hooks/useActions";

interface EventsCalendarProps {
  events: IEvents[];
}

const EventsCalendar: FC<EventsCalendarProps> = (props) => {
  const { removeEvent } = useActions();
  const removeEventFunc = (id: number) => {
    removeEvent(
      props.events.filter((item) => item.id !== id),
      id
    );
  };
  const dateCellRender = (value: Moment) => {
    const formattedDate = value.format("YYYY-MM-DD");
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formattedDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <Card className="event-card--small" size="small" key={index}>
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
                  <Button
                    className="remove-event-btn"
                    size="small"
                    title="Remove event"
                    type="primary"
                    danger
                    onClick={() => removeEventFunc(ev.id)}
                  >
                    X
                  </Button>
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
    <Calendar className="event-calendar" dateCellRender={dateCellRender} />
  );
};

export default EventsCalendar;
