interface CardProps {
  cita: any;
  isThisMyAppointment?: boolean;
  appointmentUpdateDateHandler: Function;
  updateAppointmentHandler: Function;
}

export const Card = ({
  cita,
  isThisMyAppointment,
  appointmentUpdateDateHandler,
  updateAppointmentHandler,
}: CardProps) => {
  return (
    <div className="appointment-card" key={cita._id}>
      <p>Cliente: {cita.client?.email}</p>
      <p>Artista: {cita.doctor?.email}</p>
      <p>Fecha: {cita.date}</p>
      <p>Id de la cita:{cita._id}</p>
      {isThisMyAppointment && (
        <>
          <input
            type="date"
            name="date"
            onChange={(e) => appointmentUpdateDateHandler(e)}
          />
          <input
            type="time"
            name="time"
            onChange={(e) => appointmentUpdateDateHandler(e)}
          />
          <button onClick={() => updateAppointmentHandler(cita._id)}>
            Update
          </button>
        </>
      )}
    </div>
  );
};
