import React from "react";
import { Link } from "react-router-dom";
import ContactDetail from "../components/ContactDetail";

function Home() {
  return (
    <div>
      <h2>Welcome to Amsterdam GPs</h2>
      <ContactDetail />
      <p>
        <Link to="/doctorSchedule">
          <button>Who is on duty?</button>
        </Link>
      </p>
      <p>
        <Link to="/patientSignup">
          <button>I am a new patient</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
