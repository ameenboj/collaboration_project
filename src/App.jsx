import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./register.jsx";
import Login from "./login.jsx";
import Home from "./home.jsx";
import Blog from "./blog.jsx";
import Navbar from "./navbar.jsx";
import Publier from "./publier.jsx";
import Ping from "./components/Ping";

function App() {
  const [view, setView] = useState("home");

  return (
    <div>
      <Navbar onNavigate={setView} />
      {view === "home" && <Home onNavigate={setView} />}
      {view === "blog" && <Blog onNavigate={setView} />}
      {view === "publier" && <Publier onNavigate={setView} />}
      {view === "ping" && <Ping />}
      {view === "register" && <Register />}
      {view === "login" && <Login />}
    </div>
  );
}

export default App;
