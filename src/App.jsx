import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPatient from "./components/ListPatient";
function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const deletePatients = (id) => {
    const updatedPatients = patients.filter((p) => p.id !== id);
    setPatients(updatedPatients);
  };

  useEffect(() => {
    const patientsLocalStorage = localStorage.getItem("patients");
    if (patientsLocalStorage) {
      setPatients(JSON.parse(patientsLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="container mt-20 mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} patient={patient} />
        <ListPatient
          patients={patients}
          setPatient={setPatient}
          deletePatients={deletePatients}
        />
      </div>
    </div>
  );
}

export default App;
