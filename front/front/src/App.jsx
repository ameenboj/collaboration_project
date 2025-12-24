import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workLinkLogo from "/worklink-logo.svg";
import "./App.css";
import Register from "./register.jsx";
import Login from "./login.jsx";
import Home from "./home.jsx";
import Blog from "./blog.jsx";
import Navbar from "./navbar.jsx";
import Publier from "./publier.jsx";
import Ping from "./components/Ping";
import BrowseJobs from "./browse-jobs.jsx";
import SavedJobs from "./saved-jobs.jsx";
import Proposals from "./proposals.jsx";
import PostJob from "./post-job.jsx";
import BrowseTalent from "./browse-talent.jsx";
import MyJobs from "./my-jobs.jsx";
import Messages from "./messages.jsx";

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
      {view === "browse-jobs" && <BrowseJobs onNavigate={setView} />}
      {view === "saved-jobs" && <SavedJobs onNavigate={setView} />}
      {view === "proposals" && <Proposals onNavigate={setView} />}
      {view === "post-job" && <PostJob onNavigate={setView} />}
      {view === "browse-talent" && <BrowseTalent onNavigate={setView} />}
      {view === "my-jobs" && <MyJobs onNavigate={setView} />}
      {view === "messages" && <Messages onNavigate={setView} />}
    </div>
  );
}

export default App;
