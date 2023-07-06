import Home from "./pages/Home";
import HeadphoneCategory from "./pages/HeadphoneCategory";
import SpeakerCategory from "./pages/SpeakerCategory";
import EarphoneCategory from "./pages/EarphoneCategory";
import XX99Mark2 from "./pages/XX99Mark2";
import XX99Mark1 from "./pages/XX99Mark1";
import ZX7 from "./pages/ZX7";
import ZX9 from "./pages/ZX9";
import Cart from "./components/Modals/Cart";
import XX59 from "./pages/XX59";
import YX1 from "./pages/YX1";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import Footer from "./UI/Footer";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import Navbar from "./UI/Navbar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Headphones" element={<HeadphoneCategory />} />
        <Route path="/Speakers" element={<SpeakerCategory />} />
        <Route path="/Earphones" element={<EarphoneCategory />} />
        <Route path="/XX99-Mark-2" element={<XX99Mark2 />} />
        <Route path="/XX99-Mark-1" element={<XX99Mark1 />} />
        <Route path="/ZX7" element={<ZX7 />} />
        <Route path="/ZX9" element={<ZX9 />} />
        <Route path="/YX1" element={<YX1 />} />
        <Route path="/XX59" element={<XX59 />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
