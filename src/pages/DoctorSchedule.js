import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactDetail from "../components/ContactDetail";

function DoctorSchedule() {
  const [doctorDuty, setDoctorDuty] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    async function fetchDoctorAvailability() {
      setState("Loading...");
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      // console.log(response.data);
      setDoctorDuty(response.data);
      setState("");
    }
    fetchDoctorAvailability();
  }, []);
  if (state === "Loading...") {
    return <h3>Loading...</h3>; // display for user while waiting
  }
  return (
    <div>
      <h2>Who is on Duty?</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
        </thead>
        {doctorDuty.map((doc) => {
          // console.log(doc.doctor);
          return (
            <tbody key={doc.id}>
              <tr>
                <td>{doc.doctor}</td>
                <td>{doc.onDuty ? "ON duty" : "OFF duty"}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <ContactDetail />
    </div>
  );
}

export default DoctorSchedule;
