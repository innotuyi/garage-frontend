import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import About from './components/About'
import Contact from "./components/Contact";
import Course from './components/Course'
import Pricing from './components/Pricing'
import DashboardAdmin from './components/DashboardAdmin'
import AddTeacher from './components/AddTeacher'
import AddCourse from './components/AddCourse'

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
      <Route path="/dashboard/:id">
        <Dashboard />
      </Route>

      <Route path='/about'>
        <About/>
      </Route>

      <Route path='/contact'>
        <Contact/>
      </Route>

      <Route path='/course'>
        <Course/>
      </Route>

      <Route path="/pricing">
        <Pricing/>
      </Route>
      <Route path="/admin">
        <DashboardAdmin/>
      </Route>

      <Route path='/addCourse'>
        <AddCourse/>
      </Route>

      <Route path ='/addTeacher'>
        <AddTeacher/>
      </Route>


      
    </Router>
  );
}

export default App;
