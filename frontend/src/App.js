import Home from "./pages/Home";
import Best from "./components/Best/Best";
import Header from "./UI/Header";
import "./App.css";
import Navbar from "./UI/Navbar";
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
        <Route
          path="/best"
          element={
            <>
              <Navbar />
              <Header heading="Headphones" />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
