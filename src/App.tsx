import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/LOGIN_TYPES";

function App() {
  const { setLogin, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("isLogin")) setLogin(true);
    if (localStorage.getItem("user")) {
      const savedData = localStorage.getItem("user");
      setUser(JSON.parse(savedData || "") as IUser);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
