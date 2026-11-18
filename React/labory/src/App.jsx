import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import request from "./pages/request";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<request />} />
    </Routes>
  );
};

export default App;