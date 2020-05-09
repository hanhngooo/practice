const express = require("express");
const data = require("./data.json");
const { patients, doctors } = data;
// console.log("data test:", patients);

const app = express();

app.get("/", (request, response) => {
  response.send(data);
  // console.log("data", patients);
});
app.get("/patients", (request, response) => {
  response.send(patients);
});
app.get("/doctors", (request, response) => {
  response.send(doctors);
});
app.get("/patients/:id", (request, response) => {
  const { id } = request.params;
  // console.log(id);
  const patientId = patients.find((patient) => patient.id === id);
  response.send(patientId);
});

const port = 4000;

const onListen = () => {
  console.log(`Listening on ${port}`);
};
app.listen(port, onListen);
