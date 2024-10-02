import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
