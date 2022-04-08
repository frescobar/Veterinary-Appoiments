const Patient = ({ patient, setPatient, deletePatients }) => {
  const handleDelete = () => {
    const resp = window.confirm("¿Estas seguro de eliminar este paciente?");
    if (resp) {
      deletePatients(patient.id);
    }
  };

  return (
    <div className="shadow-md m-3 bg-white px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre: {""}{" "}
        <span className="font-normal normal-case">{patient.name}</span>{" "}
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario: {""}{" "}
        <span className="font-normal normal-case">{patient.client}</span>{" "}
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: {""}{" "}
        <span className="font-normal normal-case">{patient.email}</span>{" "}
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha Alta: {""}{" "}
        <span className="font-normal normal-case">{patient.date}</span>{" "}
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Síntomas: {""}{" "}
        <span className="font-normal normal-case">{patient.symptoms}</span>{" "}
      </p>
      <div className="">
        <button
          onClick={() => setPatient(patient)}
          type="button"
          className="bg-indigo-600 text-white hover:bg-indigo-800 cursor-pointer font-bold uppercase py-2 px-4 rounded-md mx-2"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white hover:bg-red-800  font-bold uppercase cursor-pointer py-2 px-4 rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Patient;
