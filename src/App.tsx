import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Students from "./Components/Pages/Students";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students/:username" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
