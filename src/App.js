import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurMemories from "./OurMemories";
import SweetMemories from "./SweetMemories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OurMemories />} />
        <Route path="/sweet-memories" element={<SweetMemories />} />
      </Routes>
    </Router>
  );
}

export default App;
