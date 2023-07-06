import Home from "./pages/Home";
import Category from "./pages/Category";
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
        <Route path="/best" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
