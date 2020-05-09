import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
function PatientDetail() {
  const [patient, setPatient] = useState({});
  // const params = useParams();
  // console.log("routeparams", params);

  useEffect(() => {
    async function fetchPatientByID(id) {
      console.log("id:", id);
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
      );
      console.log(response.data);
      setPatient(response.data);
    }
    fetchPatientByID("8272482266"); // need to change to dynamic
  }, []);
  const { prescriptions } = patient;
  return (
    <div>
      <h2>{`${patient.firstName} ${patient.lastName}`}</h2>

      <div>
        <p>id: {patient.id}</p>
        <p>Date of birth: {patient.dateOfBirth}</p>
        <p>Gender: {patient.gender}</p>
      </div>
      <div>
        <div>
          <p>
            Contact detail:
            <li>Email: {patient.email}</li>
            <li>Phone Number: {patient.phoneNumber}</li>
          </p>
        </div>

        <div>
          Presciptions:
          {prescriptions &&
            prescriptions.map((item) => {
              return <li key={item}>{item}</li>;
            })}
        </div>
      </div>
    </div>
  );
}

export default PatientDetail;
