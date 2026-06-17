import { useState } from "react";
const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Psychiatrist",
    slots: [
      "10:00 AM - 12:00 PM",
      "1:00 PM - 3:00 PM",
      "4:00 PM - 6:00 PM"
    ]
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Therapist",
    slots: [
      "10:00 AM - 12:00 PM",
      "1:00 PM - 3:00 PM",
      "4:00 PM - 6:00 PM"
    ]
  },
  {
    id: 3,
    name: "Dr. Anjali Verma",
    specialization: "Dermatologist",
    slots: [
      "10:00 AM - 12:00 PM",
      "1:00 PM - 3:00 PM",
      "4:00 PM - 6:00 PM"
    ]
  }
];

function ConsultDoctor({
  setSelectedDoctor,
  setPage
}) {
  const [problem, setProblem] =useState("");

  const handleBook = (
  doctor,
  slot
) => {
  setSelectedDoctor({
    ...doctor,
    selectedSlot: slot,
    problem
  });

  setPage("book");
};
  return (
    <div className="consult-page">
      <h2>Available Doctors</h2>
 
      <div
  style={{
    width: "80%",
    margin: "20px auto",
  }}
>
  <textarea
    placeholder="Describe your problem..."
    value={problem}
    onChange={(e) =>
      setProblem(e.target.value)
    }
    rows="4"
    style={{
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "16px",
    }}
  />
</div>

      <div className="doctor-container">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
          >
            <h3>{doctor.name}</h3>

            <p>{doctor.specialization}</p>

            <div className="slot-container">
  {doctor.slots.map((slot, index) => (
    <button
      key={index}
      onClick={() =>
        handleBook(doctor, slot)
      }
    >
      {slot}
    </button>
  ))}
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultDoctor;