import Patient from "./Patient";

const ListPatient = ({ patients, setPatient, deletePatients }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      {patients?.length ? (
        <>
          <h2 className="font-bold text-3xl text-center">Lista de Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-7">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatients={deletePatients}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-7">
            <span className="text-indigo-600 font-bold">
              Empieza Agregando pacientes
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListPatient;
