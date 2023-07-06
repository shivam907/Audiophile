import Home from "./pages/Home";
import HeadphoneCategory from "./pages/HeadphoneCategory";
import SpeakerCategory from "./pages/SpeakerCategory";
import EarphoneCategory from "./pages/EarphoneCategory";
import XX99Mark2 from "./pages/XX99Mark2";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Headphones" element={<HeadphoneCategory />} />
        <Route path="/Speakers" element={<SpeakerCategory />} />
        <Route path="/Earphones" element={<EarphoneCategory />} />
        <Route path="/XX99-Mark-2" element={<XX99Mark2 />} />
      </Routes>
    </Router>
  );
}

export default App;
