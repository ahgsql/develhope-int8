import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter4";
//http://localhost:4000/counter?e=44
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"Main Page"} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
