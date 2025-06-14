// src/App.jsx
import {  Nav,  Footer} from "./components";
import Home from "./pages/Home";
import New from "./pages/New";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
       <main className="flex flex-col gap-16">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<New />} />
        </Routes>
      </div>
      <Footer />
      </main>
  );
}

export default App;