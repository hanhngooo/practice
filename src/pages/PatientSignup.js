import React, { useState } from "react";

function PatientSignup() {
  const form = {
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [confirmation, setConfirmation] = useState("");
  function handleSubmit(event) {
    event.preventDefault(); // not refesh on submit
    console.log(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    Gender: ${gender}
    Date of birth: ${dateOfBirth}`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGender("");
    setDateOfBirth("");
    setConfirmation("Your information has been submitted.");
  }

  return (
    <div>
      <h2>Patient Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input //   Controlled component: value is managed by the state
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label>Last Name</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Phone</label>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <label>Gender</label>
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">Select</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <br />
        <label>Date of birth</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        ></input>

        <br />

        <button>Submit</button>
        <p>{confirmation}</p>
      </form>
    </div>
  );
}

export default PatientSignup;
