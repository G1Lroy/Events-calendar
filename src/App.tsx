import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { useActions } from "./hooks/useActions";

function App() {
  const { setLogin } = useActions();
  
  useEffect(() => {
    if (localStorage.getItem("isLogin")) setLogin(true);
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
