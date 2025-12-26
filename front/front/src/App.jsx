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
import ConseilsGuides from "./conseils-guides.jsx";
import TendancesFreelance from "./tendances-freelance.jsx";
import CategoryDevWeb from "./category-dev-web.jsx";
import CategoryDesignUX from "./category-design-ux.jsx";
import CategoryRedactionWeb from "./category-redaction-web.jsx";
import CategorySEOMarketing from "./category-seo-marketing.jsx";
import CategoryEcommerce from "./category-ecommerce.jsx";
import CategoryMobileApp from "./category-mobile-app.jsx";
import GuideDetail from "./guide-detail.jsx";
import Footer from "./footer.jsx";
import Pricing from "./pricing.jsx";

function App() {
  const [view, setView] = useState("home");

  // Extract guide ID if view starts with "guide-"
  const getGuideId = () => {
    if (view.startsWith("guide-")) {
      return view.replace("guide-", "");
    }
    return null;
  };

  return (
    <div>
      <Navbar onNavigate={setView} />
      {view === "home" && <Home onNavigate={setView} />}
      {view === "blog" && <Blog onNavigate={setView} />}
      {view === "conseils-guides" && <ConseilsGuides onNavigate={setView} />}
      {view.startsWith("guide-") && (
        <GuideDetail guideId={getGuideId()} onNavigate={setView} />
      )}
      {view === "tendances-freelance" && (
        <TendancesFreelance onNavigate={setView} />
      )}
      {view === "pricing" && <Pricing onNavigate={setView} />}
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
      {view === "category-dev-web" && <CategoryDevWeb onNavigate={setView} />}
      {view === "category-design-ux" && (
        <CategoryDesignUX onNavigate={setView} />
      )}
      {view === "category-redaction-web" && (
        <CategoryRedactionWeb onNavigate={setView} />
      )}
      {view === "category-seo-marketing" && (
        <CategorySEOMarketing onNavigate={setView} />
      )}
      {view === "category-ecommerce" && (
        <CategoryEcommerce onNavigate={setView} />
      )}
      {view === "category-mobile-app" && (
        <CategoryMobileApp onNavigate={setView} />
      )}
      <Footer onNavigate={setView} />
    </div>
  );
}

export default App;
