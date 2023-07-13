import React, { FC, useEffect, useState } from "react";
import { IEvents } from "../models/EVENT_TYPES";
/* @ts-ignore */
import userLogo from "./../assets/user.svg";
import { IUser } from "../models/LOGIN_TYPES";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import moment from "moment";
import { useSelectorType } from "../hooks/useSelectorType";

interface UserInfoProps {
  user: IUser;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { events } = useSelectorType((state) => state.eventState);
  const [todayEvent, setTodayEvent] = useState<IEvents>({} as IEvents);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    if (Object.keys(todayEvent).length) {
      api.info({
        message: `Today event, don't miss out: ${todayEvent.description}!`,
        description: `Author: ${todayEvent.author}, guest: ${todayEvent.guest}.`,
        placement,
      });
    } else {
      api.info({
        message: `No business today. Add events to display it`,
        placement,
      });
    }
  };

  useEffect(() => {
    setTodayEvent(
      events.find((item) => item.date === moment().format("YYYY-MM-DD")) ||
        ({} as IEvents)
    );
  }, [events]);

  return (
    <div className="user-info">
      {contextHolder}
      <div
        className={`event-notification ${
          Object.keys(todayEvent).length && "event-notification--active"
        }`}
        onClick={() => openNotification("top")}
      ></div>

      <img title="Logged user" src={userLogo} alt="user logo"></img>
      <span>{user.username}</span>
    </div>
  );
};

export default UserInfo;
