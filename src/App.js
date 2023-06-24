import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
