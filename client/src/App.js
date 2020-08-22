import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar_component";
import ExercisesList from "./components/exercises-list_component";
import EditExercise from "./components/edit-exercise_component";
import CreateExercise from "./components/create-exercise_component";
import CreateUser from "./components/create-user_component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
