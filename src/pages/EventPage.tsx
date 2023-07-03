import React, { FC, useEffect, useState } from "react";

import EventsCalendar from "../components/EventsCalendar";
import { Button, Layout, Modal, Row } from "antd";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useSelectorType } from "../hooks/useSelectorType";
import { IEvents } from "../models/EVENT_TYPES";

const EventPage: FC = () => {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useSelectorType((state) => state.eventState);

  useEffect(() => {
    fetchGuests();
  }, []);

  const addNewEvent = (event: IEvents) => {
    console.log(event);
    setIsModalOpen(false);
  };
  return (
    <Layout className="main-content">
      <EventsCalendar events={[]}></EventsCalendar>
      <Row justify={"center"}>
        <Button onClick={() => setIsModalOpen(true)}>Add event</Button>
        <Modal
          onCancel={() => setIsModalOpen(false)}
          open={IsmodalOpen}
          footer={null}
          title="Add event"
        >
          <EventForm submit={addNewEvent} guests={guests} />
        </Modal>
      </Row>
    </Layout>
  );
};

export default EventPage;
