import { useState } from "react";
function MyAppointments({
  user
}) {

    const [appointmentsData,
  setAppointmentsData] =
  useState(
    JSON.parse(
      localStorage.getItem(
        "appointments"
      )
    ) || []
  );

 const userAppointments =
  appointmentsData.filter(
    (appointment) =>
      appointment.patientEmail ===
      user?.email
  );
    
   const handleCancel = (
  appointmentToCancel
) => {

  const updatedAppointments =
    appointmentsData.map(
      (appointment) =>
        appointment ===
        appointmentToCancel
          ? {
              ...appointment,
              status:
                "Cancelled",
            }
          : appointment
    );

  localStorage.setItem(
    "appointments",
    JSON.stringify(
      updatedAppointments
    )
  );

  setAppointmentsData(
    updatedAppointments
  );
};

  return (
    <div className="consult-page">
      <h2>My Appointments</h2>

      {userAppointments.length > 0 ? (

        <div className="appointments-container">

          {userAppointments.map(
            (
              appointment,
              index
            ) => (
              <div
                key={index}
                className="appointment-card"
              >
                <h3>
                  {appointment.doctorName}
                </h3>

                <p>
                  <strong>Type:</strong>{" "}
                  {
                    appointment.specialization
                  }
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {appointment.date}
                </p>

                <p>
                  <strong>Slot:</strong>{" "}
                  {appointment.slot}
                </p>

                <p>
                  <strong>Problem:</strong>{" "}
                  {
                    appointment.problem
                  }
                </p>

                <p>
                  <strong>Meet Link:</strong>{" "}
                  {appointment.meetLink ? (
                    <a
                      href={
                        appointment.meetLink
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Join Meeting
                    </a>
                  ) : (
                    "Waiting for Doctor"
                  )}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span
  style={{
    color:
      appointment.status ===
      "Cancelled"
        ? "#ef4444"
        : "#22c55e"
  }}
>
  {appointment.status}
</span>
                 {/* {appointment.status} */}
                </p>

                {
  appointment.status !==
  "Cancelled" && (
    <button
     onClick={() =>
  handleCancel(appointment)
}
      className="cancel-btn"
    >
      Cancel Appointment
    </button>
  )
}
                  
              </div>
            )
          )}

        </div>

      ) : (
        <p>
          No Appointments Yet
        </p>
      )}
    </div>
  );
}

export default MyAppointments;