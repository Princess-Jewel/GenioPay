import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./auth/signup/SignUp";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />

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
