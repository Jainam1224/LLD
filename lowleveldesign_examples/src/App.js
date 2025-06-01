import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Team from "./components/Team";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        LLD Learning
        <nav className="px-20 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
