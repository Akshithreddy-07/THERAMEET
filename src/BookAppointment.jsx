import { useState } from "react";
import { toast } from "react-toastify";
function BookAppointment({
  selectedDoctor,
  user
}) {
  const [patientName, setPatientName] =
    useState("");

  const [date, setDate] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

const appointment = {
  doctorName: selectedDoctor?.name,
  specialization: selectedDoctor?.specialization,
  slot: selectedDoctor?.selectedSlot,
  problem: selectedDoctor?.problem,
  patientName,
  patientEmail: user?.email,
  date,
  meetLink: "",
  status: "Pending",
};

const appointments =
  JSON.parse(
    localStorage.getItem("appointments")
  ) || [];

const alreadyBooked =
  appointments.find(
    (appt) =>
      appt.doctorName ===
        appointment.doctorName &&
      appt.date ===
        appointment.date &&
      appt.slot ===
        appointment.slot
  );

if (alreadyBooked) {
   toast.error(
    "This slot is already booked. Please choose another slot."
  );
  return;
}

appointments.push(appointment);

localStorage.setItem(
  "appointments",
  JSON.stringify(appointments)
);

     toast.success(
      "Appointment Booked Successfully!"
    );

    setPatientName("");
    setDate("");
  };

  return (
    <div className="consult-page">
      <h2>Book Appointment</h2>
     <h3>
  Doctor:
  {" "}
  {selectedDoctor?.name}
</h3>

<p>
  Specialization:
  {" "}
  {selectedDoctor?.specialization}
</p>

<p>
  Slot:
  {" "}
  {selectedDoctor?.selectedSlot}
</p>
      <form
        className="appointment-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) =>
            setPatientName(e.target.value)
          }
          required
        />

        <input
          type="date"
           min={
             new Date()
               .toISOString()
               .split("T")[0]
           }
           value={date}
           onChange={(e) =>
             setDate(e.target.value)
           }
           required
          />

        <button type="submit">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;