import { useState, useEffect } from "react";
import { toast } from "react-toastify";


function DoctorAppointments({ doctor }) {
  const [appointments, setAppointments] =
    useState([]);
const [meetLinks, setMeetLinks] =
  useState({});
  useEffect(() => {
    const allAppointments =
      JSON.parse(
        localStorage.getItem(
          "appointments"
        )
      ) || [];

    const doctorAppointments =
  allAppointments.filter(
    (appt) =>
      appt.doctorName === doctor.name &&
      appt.status !== "Cancelled"
  );

    setAppointments(
      doctorAppointments
    );
  }, [doctor]);
  

  const updateStatus = (
  patientEmail,
  date,
  slot,
  newStatus,
  meetLink = ""
) => {

  if (
  newStatus === "Accepted" &&
  !meetLink
) {
  toast.error(
    "Please enter a Meet link"
  );
  return;
}

    const allAppointments =
      JSON.parse(
        localStorage.getItem(
          "appointments"
        )
      ) || [];

    const updated =
      allAppointments.map(
        (appt) => {
          if (
            appt.patientEmail ===
              patientEmail &&
            appt.date === date &&
            appt.slot === slot
          ) {
           return {
  ...appt,
  status:newStatus,
  meetLink:
    newStatus === "Accepted"
      ? meetLink
      : appt.meetLink
};
          }

          return appt;
        }
      );

    localStorage.setItem(
      "appointments",
      JSON.stringify(updated)
    );

    const doctorAppointments =
  allAppointments.filter(
    (appt) =>
      appt.doctorName === doctor.name &&
      appt.status !== "Cancelled"
  );

    setAppointments(
      doctorAppointments
    );

    toast.success(
      `Appointment ${newStatus}`
    );
  };

  return (
    <div className="doctor-appointments-page">
      <h2>
        My Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="no-data">
          No appointments found
        </p>
      ) : (
        <div className="appointments-grid">
          {appointments.map(
            (appt, index) => (
              <div
                key={index}
                className="appointment-card"
              >
                <h3>
                  {appt.patientName}
                </h3>

                <p>
                  <strong>
                    Date:
                  </strong>{" "}
                  {appt.date}
                </p>

                <p>
                  <strong>
                    Slot:
                  </strong>{" "}
                  {appt.slot}
                </p>

                <p>
                  <strong>
                    Problem:
                  </strong>{" "}
                  {appt.problem}
                </p>

                <p>
                  <strong>
                    Status:
                  </strong>{" "}
                  {appt.status}
                </p>

                {appt.status ===
                  "Pending" && (
                  <div className="action-buttons">
                    <input
  type="text"
  placeholder="Paste Meet Link"
  value={meetLinks[index] || ""}
  onChange={(e) =>
    setMeetLinks({
      ...meetLinks,
      [index]: e.target.value
    })
  }
/>

<button
  className="accept-btn"
  onClick={() =>
  updateStatus(
    appt.patientEmail,
    appt.date,
    appt.slot,
    "Accepted",
    meetLinks[index]
  )
}
>
  Accept
</button>


                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateStatus(
                          appt.patientEmail,
                          appt.date,
                          appt.slot,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default DoctorAppointments;