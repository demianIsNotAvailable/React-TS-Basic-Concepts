import { useState } from "react";
import "./App.css";
import {
  createAppointment,
  getMyAppointments,
  IResponseData,
  updateAppointmentById,
} from "./services/appointment.service";
import { Card } from "./Card";

function App() {
  const [date, setDate] = useState({
    date: "",
    time: "",
  });
  const [appointment, setAppointment] = useState<IResponseData>();
  const [appointments, setAppointments] = useState([]);

  const [updateAppointmentData, setUpdateAppointmentData] = useState({
    date: "",
    time: "",
    doctor: "",
  });

  const client = "668522027da76b1f8ede98a4";
  // const doctor = "65cdd457f954c86a1597cf07";
  // const doctor = "65cdd456f954c86a1597cd20"
  const doctor = "668522027da76b1f8ede98a4";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODUyMjAyN2RhNzZiMWY4ZWRlOThhNCIsInJvbGUiOiJBRE1JTiIsImVtYWlsIjoiZW1haWwxQGVtYWlsLmNvbSIsImlhdCI6MTcyMDgwNDQ3MH0.090PHRNWayVCCU2-FkzJrhAPCLBg32s-8GLjEyTDCJY";

  const dateInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };

  const createAppointmentHandler = async () => {
    const appointment = {
      client: client,
      doctor: doctor,
      date: `${date.date}:${date.time}`,
    };
    const newAppointment = await createAppointment(appointment, token);
    console.log(newAppointment);
    setAppointment(newAppointment);
  };

  const bringAppointments = async () => {
    const apps = await getMyAppointments(token);
    setAppointments(apps);
  };

  const appointmentUpdateDateHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdateAppointmentData({
      ...updateAppointmentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <input type="date" name="date" onChange={(e) => dateInputHandler(e)} />
      <input type="time" name="time" onChange={(e) => dateInputHandler(e)} />
      <button onClick={createAppointmentHandler}>Enviar</button>
      <button onClick={bringAppointments}>Ver citas</button>
      {appointments.length ? (
        appointments.map((cita: any) => {
          return (
            <Card
              key={cita._id}
              cita={cita}
              appointmentUpdateDateHandler={appointmentUpdateDateHandler}
              updateAppointmentHandler={updateAppointmentById}
              isThisMyAppointment={cita.client?._id === client}
            />
          );
        })
      ) : appointment ? (
        <p>Algo ha salido mal *carita triste*</p>
      ) : (
        <p>Por favor, reserve su cita</p>
      )}
    </>
  );
}

export default App;
