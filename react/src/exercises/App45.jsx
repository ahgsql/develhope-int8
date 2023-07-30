import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubUser from "./components/GithubUser2";
import Counter from "./components/Counter4";

//http://localhost:4000/users/ahgsql?e=45
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"Main Page"} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<GithubUser />} />
      </Routes>
    </Router>
  );
}

export default App;
