function DoctorDashboard({
  doctor
}) {

  const appointments =
    JSON.parse(
      localStorage.getItem(
        "appointments"
      )
    ) || [];

  const doctorAppointments =
    appointments.filter(
      (appointment) =>
        appointment.doctorName ===
        doctor.name
    );

  const pending =
    doctorAppointments.filter(
      (appointment) =>
        appointment.status ===
        "Pending"
    ).length;

  const accepted =
    doctorAppointments.filter(
      (appointment) =>
        appointment.status ===
        "Accepted"
    ).length;

  const rejected =
    doctorAppointments.filter(
      (appointment) =>
        appointment.status ===
        "Rejected"
    ).length;

  return (
  <div className="dashboard-page">

  <div className="dashboard-header">
    <h2>Welcome, {doctor.name}</h2>
    <p>{doctor.specialization}</p>
  </div>

  <div className="doctor-profile-card">
    
    {/* Left Panel Card for Profile Attributes */}
    <div className="profile-details-column">
      <h3>Doctor Profile</h3>
      <p><strong>ID:</strong> <span>{doctor.id}</span></p>
      <p><strong>Qualification:</strong> <span>{doctor.qualification}</span></p>
      <p><strong>Experience:</strong> <span>{doctor.experience} Years</span></p>
      <p><strong>Email:</strong> <span>{doctor.email}</span></p>
    </div>

    {/* Right Panel Row for Data Summary Metric Cards */}
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total</h3>
        <p>{doctorAppointments.length}</p>
      </div>

      <div className="stat-card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>

      <div className="stat-card">
        <h3>Accepted</h3>
        <p>{accepted}</p>
      </div>

      <div className="stat-card">
        <h3>Rejected</h3>
        <p>{rejected}</p>
      </div>
    </div>

  </div>
  
</div>
  );
}

export default DoctorDashboard;