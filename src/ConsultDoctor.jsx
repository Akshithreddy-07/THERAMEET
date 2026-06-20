import { useState } from "react";
import { toast } from "react-toastify";
const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Psychiatrist",
    experience: "10 Years",
    qualification: "MBBS, MD Psychiatry",
    slots: [
      "10:00 AM - 12:00 PM",
      "1:00 PM - 3:00 PM",
      "4:00 PM - 6:00 PM"
    ]
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Nutritionist ",
    experience: "8 Years",
    qualification: "M.Sc. Nutrition and Dietetics",
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
    experience: "12 Years",
    qualification: "MBBS, MD Dermatology",
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

   if (!problem.trim()) {
    toast.error(
      "Please describe your problem first."
    );
    return;
  }

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
   placeholder="Describe your symptoms, concerns, or reason for consultation..."
    value={problem}
    onChange={(e) =>
      setProblem(e.target.value)
    }
    rows="4"
    maxLength="200"
    required
    style={{
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "16px",
    }}
  />

    <p
    style={{
      fontSize: "12px",
      color: "#94a3b8",
      textAlign: "right",
      marginTop: "5px",
    }}
  >
    {problem.length}/200 characters
  </p>
</div>

      <div className="doctor-container">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
          >
            <h3>{doctor.name}</h3>

            <p>{doctor.specialization}</p>

            <p>
  <strong>Experience:</strong>{" "}
  {doctor.experience}
</p>

<p>
  <strong>Qualification:</strong>{" "}
  {doctor.qualification}
</p>

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