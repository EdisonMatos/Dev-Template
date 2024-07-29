import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPaper from "./pages/indexPaper.jsx";
import Index from "./pages/Index.jsx";
import Panatta from "./pages/panatta.jsx";
import "./index.css";
import "./styles/backgrounds.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/law" element={<Index />} />
      <Route path="/" element={<Panatta />} />
      {/* <Route path="/paper" element={<IndexPaper />} /> */}
    </Routes>
  </Router>
);
