import React, { FC, useEffect, useState } from "react";
import { useSelectorType } from "../hooks/useSelectorType";
import { Layout, Menu, Row, notification } from "antd";
/* @ts-ignore */
import userLogo from "./../assets/user.svg";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { NotificationPlacement } from "antd/es/notification/interface";
import moment from "moment";
import { IEvents } from "../models/EVENT_TYPES";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const { isLogin, user } = useSelectorType((state) => state.loginState);
  const { events } = useSelectorType((state) => state.eventState);
  const [api, contextHolder] = notification.useNotification();
  const [todayEvent, setTodayEvent] = useState<IEvents>({} as IEvents);

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
    <Layout.Header className="header-light">
      <Row justify="end">
        {contextHolder}
        <Menu theme="light" mode="horizontal" selectable={false}>
          {isLogin ? (
            <>
              <div className="user-info">
                <div
                  className={`event-notification ${
                    Object.keys(todayEvent).length
                      ? "event-notification--active"
                      : null
                  }`}
                  onClick={() => openNotification("top")}
                ></div>

                <img title="Logged user" src={userLogo} alt="user logo"></img>
                <span>{user.username}</span>
              </div>
              <Menu.Item onClick={logout} key={1}>
                LOGOUT
              </Menu.Item>
            </>
          ) : (
            <>
              <div>&#x261B;</div>
              <Menu.Item key={2} onClick={() => navigate("/login")}>
                LOGIN
              </Menu.Item>
            </>
          )}
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
