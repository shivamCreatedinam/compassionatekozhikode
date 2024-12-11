import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/home";
import { Login } from "./components/Login";
import { Posts } from "./components/Posts";
import { About } from "./components/About";
import { Test } from "./components/test";
import { Contact } from "./components/Contact";
import { Events } from "./components/Events";
import { Blog } from "./components/Blog";
import { NGOList } from "./components/NgoList";
import { NgoDetailsPage } from "./components/NgoDetailsPage";
import { EventList } from "./components/EventList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ngo_list" element={<NGOList />} />
          <Route path="/ngodetails" element={<NgoDetailsPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
