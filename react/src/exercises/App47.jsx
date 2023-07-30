import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubUser from "./components/GithubUser2";
import Counter from "./components/Counter4";
import { Link } from "react-router-dom";

//http://localhost:4000/fefe/ahgsql?e=47
function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "50px" }}>
        <Link to="/"> Main Page </Link>
        <Link to="/counter"> Counter </Link>
        <Link to="/users/ahgsql"> My Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={"Main Page"} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<GithubUser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
