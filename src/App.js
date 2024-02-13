import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Rocket } from "./Components/Rocket/Rocket";
import { Mission } from "./Components/Mission/Mission";
import Profile from "./Components/Myprofile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="Mission" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<h3>Invalid Path</h3>} />
      </Routes>
    </>
  );
}

export default App;
