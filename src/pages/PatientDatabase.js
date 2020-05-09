import React, { useState, useEffect } from "react";
import axios from "axios";
import Patient from "../components/Patient";

function PatientDatabase() {
  const [patients, setPatients] = useState([]);
  const [doctors, setdoctors] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      // console.log(response.data);
      setPatients(response.data);
    }
    fetchPatients();
  }, []);
  // sort by lastName
  const copyPatients = [...patients];
  const sortedPatients = copyPatients.sort(function (patientA, patientB) {
    return patientA.lastName.localeCompare(patientB.lastName);
  });
  // fetch doctor data

  const apiUrl = `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`;
  useEffect(() => {
    async function fetchdoctors() {
      const response = await axios.get(apiUrl);
      // console.log("doctors", response.data);
      setdoctors(response.data);
    }
    fetchdoctors();
  }, []);
  // map doctor to put in select
  const doctorList = doctors.map((doctor) => {
    return (
      <option key={doctor.id} value={doctor.id}>
        {doctor.doctor}
      </option>
    );
  });

  // console.log(filterValue);
  function filterPatients(patientObj) {
    if (filterValue === "all") {
      return true;
    } else {
      return patientObj.doctorId === parseInt(filterValue);
    }
  }
  const newList = sortedPatients.filter(filterPatients);
  return (
    <div>
      <h2>Patient Database</h2>
      <label>Select</label>
      <select onChange={(event) => setFilterValue(event.target.value)}>
        {doctorList}
        <option value="all">All</option>
      </select>
      {newList.map((patient) => {
        const { id, firstName, lastName, dateOfBirth } = patient;
        return (
          <Patient
            key={id}
            firstName={firstName}
            lastName={lastName}
            id={id}
            dateOfBirth={dateOfBirth}
          />
        );
      })}
    </div>
  );
}

export default PatientDatabase;
