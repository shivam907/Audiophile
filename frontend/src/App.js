import Home from "./pages/Home";
import HeadphoneCategory from "./pages/HeadphoneCategory";
import SpeakerCategory from "./pages/SpeakerCategory";
import EarphoneCategory from "./pages/EarphoneCategory";
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
      </Routes>
    </Router>
  );
}

export default App;
