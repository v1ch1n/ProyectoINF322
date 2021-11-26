import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home"
import Statistics from "./pages/statistics/Statistics";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Topbar />
    <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} /> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
