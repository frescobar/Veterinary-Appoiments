import { useState, useEffect } from "react";
import Error from "./Error";
const Form = ({ patients, setPatients, patient }) => {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptom] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (patient) {
      setName(patient.name);
      setClient(patient.client);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptom(patient.symptoms);
    } else {
      setName("");
      setClient("");
      setEmail("");
      setDate("");
      setSymptom("");
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, client, email, date, symptoms].includes("")) {
      setError(true);
    } else {
      setError(false);

      const patientsObject = {
        name,
        client,
        email,
        date,
        symptoms,
      };

      if (patient.id) {
        patientsObject.id = patient.id;
        setPatients(
          patients.map((patient) =>
            patient.id === patientsObject.id ? patientsObject : patient,
          ),
          setPatients({}),
        );
      } else {
        patientsObject.id =
          Math.random().toString(36) + Date.now().toString(36);
        setPatients([...patients, patientsObject]);
      }

      setName("");
      setClient("");
      setEmail("");
      setDate("");
      setSymptom("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      {" "}
      <h2 className="font-bold text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-7">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && <Error message="Todos los campos son Obligatorios" />}

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            type="text"
            placeholder="Nombre Mascota"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase">
            Nombre Propietario
          </label>
          <input
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase">
            Alta
          </label>
          <input
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase">
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Describe los Síntomas"
            value={symptoms}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>
        <input
          onClick={handleSubmit}
          type="submit"
          value={patient.id ? "Actualizar Paciente" : "Agregar Paciente"}
          className="bg-indigo-600 text-white rounded-md w-full p-3 font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Form;
