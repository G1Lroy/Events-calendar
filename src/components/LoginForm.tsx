import React, { FC, useState } from "react";
import { Button, Form, Input } from "antd";
import { useSelectorType } from "../hooks/useSelectorType";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { login } = useActions();
  const { error, isloading } = useSelectorType((state) => state.loginState);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userInfo;
  const submit = () => login(username, password);

  return (
    <Form onFinish={submit}>
      {error && <div>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
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
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isloading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
