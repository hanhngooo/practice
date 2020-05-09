import React from "react";
import { Link } from "react-router-dom";

function PatientDatabase(props) {
  return (
    <div>
      <div>
        <p>Name: {`${props.firstName} ${props.lastName}`}</p>
        <p>ID: {props.id}</p>
        <p>Date of birth: {props.dateOfBirth}</p>
        <Link to={`/patientDatabase/${props.id}`}>
          <button>Show detail</button>
        </Link>
      </div>
    </div>
  );
}

export default PatientDatabase;
