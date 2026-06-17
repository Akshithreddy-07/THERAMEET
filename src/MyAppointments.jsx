function MyAppointments({
  user
}) {
  const appointments =
    JSON.parse(
      localStorage.getItem(
        "appointments"
      )
    ) || [];

  const userAppointments =
    appointments.filter(
      (appointment) =>
        appointment.patientEmail ===
        user?.email
    );

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
                  Confirmed
                </p>

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