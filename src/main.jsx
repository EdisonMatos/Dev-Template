import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Index from "./pages/Index.jsx";
import Lp01 from "./pages/Lp01.jsx";
import Lp02 from "./pages/Lp02.jsx";
import Lp03 from "./pages/Lp03.jsx";
import WhatsAppLinks from "./components/interactives/WhatsappLinks.jsx";

import { WhatsAppLinkProvider } from "./components/util/WhatsAppLinkContext.jsx";

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <WhatsAppLinkProvider value={true}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/whatsapp" element={<WhatsAppLinks form={false} />} />
        {/* <Route path="/lp01" element={<Lp01 />} /> */}
        {/* <Route path="/lp02" element={<Lp02 />} /> */}
        {/* <Route path="/lp03" element={<Lp03 />} /> */}
      </Routes>
    </WhatsAppLinkProvider>
  </Router>
);
