import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExecises from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExecises />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
