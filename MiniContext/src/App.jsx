import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextrProvider from "./context/UserContextrProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextrProvider>
      <h1>Hello world!</h1>
      <Login />
      <Profile />
    </UserContextrProvider>
  );
}

export default App;
