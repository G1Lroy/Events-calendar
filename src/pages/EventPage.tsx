import React, { FC, useEffect, useState } from "react";

import EventsCalendar from "../components/EventsCalendar";
import { Button, Layout, Modal } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useSelectorType } from "../hooks/useSelectorType";
import { IEvents } from "../models/EVENT_TYPES";


const EventPage: FC = () => {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useSelectorType((state) => state.eventState);
  const loggedUser = useSelectorType((state) => state.loginState.user.username);

  useEffect(() => {
    fetchEvents(loggedUser);
    fetchGuests();
  }, []);

  const addNewEvent = (event: IEvents) => {
    createEvent(event);
    fetchEvents(loggedUser);
    setIsModalOpen(false);
  };
  
  return (
    <Layout className="main-content">
      <div className="add-event-wrapper">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add event
        </Button>
      </div>
      <Modal
        onCancel={() => setIsModalOpen(false)}
        open={IsmodalOpen}
        footer={null}
        title="Add event"
      >
        <EventForm submit={addNewEvent} guests={guests} />
      </Modal>
      <EventsCalendar events={events}></EventsCalendar>
    </Layout>
  );
};

export default EventPage;
