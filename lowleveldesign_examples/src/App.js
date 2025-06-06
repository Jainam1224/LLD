import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import Comments from "./components/Comments/Comments";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Pagination from "./components/Pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        LLD Learning
        <nav className="px-20 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/accordion">Accordion </a>
          <a href="/comments">Nested Comments </a>
          <a href="/image-slider">Image Slider </a>
          <a href="/pagination">Pagination </a>
          <a href="/live-chat">Live Chat </a>
          <a href="/login">Login </a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
        </select>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />} />
          </Route>
          <Route path="/team" element={<Team />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/image-slider" element={<ImageSlider />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/live-chat" element={<LiveChat />}></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
