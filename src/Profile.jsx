function Profile({ user }) {
  const appointments =
    JSON.parse(
      localStorage.getItem("appointments")
    ) || [];

  const userAppointments =
    appointments.filter(
      (appointment) =>
        appointment.patientEmail ===
        user?.email
    );

  const bmi =
    user?.height && user?.weight
      ? (
          user.weight /
          ((user.height / 100) ** 2)
        ).toFixed(1)
      : "N/A";

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="profile-header">
        <div className="avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="header-info">
          <h1>{user?.name}</h1>

          <p className="status">
            Active Patient
          </p>

          <p className="patient-id">
            Patient ID: THM001
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="dashboard-grid">

        {/* General Info */}
        <div className="dashboard-card">
          <h3>👤 General Information</h3>

          <p>
            <strong>Age:</strong>{" "}
            {user?.age}
          </p>

          <p>
            <strong>Gender:</strong>{" "}
            {user?.gender}
          </p>
        </div>

        {/* Health */}
        <div className="dashboard-card">
          <h3>⚡ Health Details</h3>

          <p>
            <strong>Height:</strong>{" "}
            {user?.height} cm
          </p>

          <p>
            <strong>Weight:</strong>{" "}
            {user?.weight} kg
          </p>

          <p>
            <strong>BMI:</strong>{" "}
            {bmi}
          </p>

          <p>
            <strong>Blood Group:</strong>{" "}
            {user?.bloodGroup}
          </p>
        </div>

        {/* Contact */}
        <div className="dashboard-card">
          <h3>📞 Contact Information</h3>

          <p>
            <strong>Phone:</strong>{" "}
            {user?.phone}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user?.email}
          </p>
        </div>

        {/* Summary */}
        <div className="dashboard-card">
          <h3>📋 Patient Summary</h3>

          <p>
            <strong>
              Total Appointments:
            </strong>{" "}
            {userAppointments.length}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            Active
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;