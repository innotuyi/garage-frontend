import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />{" "}
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>


      
    </Router>
  );
}

export default App;
