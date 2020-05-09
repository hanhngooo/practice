import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientSignup from "./pages/PatientSignup";
import PatientDatabase from "./pages/PatientDatabase";
import PatientDetail from "./pages/PatientDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doctorSchedule" component={DoctorSchedule} />
        Doctor Schedule
        <Route path="/patientSignup" component={PatientSignup} />
        Patient Signup
        <Route exact path="/patientDatabase" component={PatientDatabase} />
        Patient Database
        <Route
          eact
          path="/patientDatabase/:patientId"
          component={PatientDetail}
        />
      </Switch>
    </div>
  );
}

export default App;
