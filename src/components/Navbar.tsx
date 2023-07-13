import React, { FC } from "react";
import { useSelectorType } from "../hooks/useSelectorType";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import UserInfo from "./UserInfo";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const { isLogin, user } = useSelectorType((state) => state.loginState);

  return (
    <Layout.Header className="header-light">
      <Row justify="end">
        <Menu theme="light" mode="horizontal" selectable={false}>
          {isLogin ? (
            <>
              <UserInfo user={user} />
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
