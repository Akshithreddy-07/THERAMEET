const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Psychologist"
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Therapist"
  },
  {
    id: 3,
    name: "Dr. Anjali Verma",
    specialization: "Counsellor"
  }
];

function ConsultDoctor() {
  return (
    <div className="consult-page">
      <h2>Available Doctors</h2>

      <div className="doctor-container">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
          >
            <h3>{doctor.name}</h3>

            <p>{doctor.specialization}</p>

            <button>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultDoctor;