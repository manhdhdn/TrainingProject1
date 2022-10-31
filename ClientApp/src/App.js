import Home from "./page/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Admin from "./page/Admin";
import Login from "./page/Login";
import Rerister from "./page/Rerister";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path='/login/*' element = {<Login/>} />
          <Route path="/rerister" element = {<Rerister/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
