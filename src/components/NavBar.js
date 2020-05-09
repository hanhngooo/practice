import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
          Home
        </NavLink>
        |{" "}
        <NavLink to="/doctorSchedule" activeStyle={{ fontWeight: "bold" }}>
          Doctor Schedule
        </NavLink>
        |{" "}
        <NavLink to="/PatientSignup" activeStyle={{ fontWeight: "bold" }}>
          Patient Signup
        </NavLink>
        |{" "}
        <NavLink to="/patientDatabase" activeStyle={{ fontWeight: "bold" }}>
          Patient Database
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
