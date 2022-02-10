import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
