import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React, { FC, useState } from "react";
import { IUser } from "../models/LOGIN_TYPES";
import { IEvents } from "../models/EVENT_TYPES";
import { useSelectorType } from "../hooks/useSelectorType";
import dayjs, { Dayjs } from "dayjs";

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvents) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const author = useSelectorType((state) => state.loginState.user.username);

  const [event, setEvent] = useState<IEvents>({
    author,
    date: "",
    description: "",
    guest: "",
  });

  const submitEventForm = () => submit(event);

  const disabledDate = (cur: Dayjs) => cur && cur < dayjs().endOf("day");

  return (
    <Form onFinish={submitEventForm}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[{ required: true, message: "" }]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "" }]}
      >
        <DatePicker
          disabledDate={disabledDate}
          format="YYYY-MM-DD"
          onChange={(_, dateString) => setEvent({ ...event, date: dateString })}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        label="Guest"
        name="guest"
        rules={[{ required: true, message: "" }]}
      >
        <Select onChange={(item) => setEvent({ ...event, guest: item })}>
          {guests.map((item) => (
            <Select.Option value={item.username} key={item.username}>
              {item.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Row justify={"center"}>
          <Button htmlType="submit">Create</Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
