import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
