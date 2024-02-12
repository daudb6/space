import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Rocket } from "./Components/Rocket/Rocket";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="Rocket" element={<Rocket />} />
      </Routes> */}
    </>
  );
}

export default App;
