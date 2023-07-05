import Home from "./pages/Home";
import Best from "./components/Best/Best";
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
        <Route path="/best" element={<Best />} />
      </Routes>
    </Router>
  );
}

export default App;
