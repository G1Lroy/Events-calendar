import React, { FC, useState } from "react";
import { message, Button, Form, Input, Row } from "antd";
import { useSelectorType } from "../hooks/useSelectorType";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { login } = useActions();
  const [messageApi, contextHolder] = message.useMessage();
  const { isloading, isLogin } = useSelectorType((state) => state.loginState);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userInfo;

  const submit = async () => {
    login(username, password);
    messageApi
      .open({
        type: "loading",
        content: "Action in progress..",
        duration: 1,
      })
      .then(() => {
        if (!isLogin) message.warning("Invalid user or pasword", 1);
      });
      
  };

  return (
    <Form onFinish={submit}>
      {contextHolder}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "" }]}
      >
        <Input
          value={username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "" }]}
      >
        <Input.Password
          value={password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Row justify={"center"} align={"middle"}>
          <Button type="primary" htmlType="submit" loading={isloading}>
            Submit
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
