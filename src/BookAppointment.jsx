function BookAppointment() {
  return (
    <div className="consult-page">
      <h2>Book Appointment</h2>

      <form className="appointment-form">
        <input
          type="text"
          placeholder="Patient Name"
          required
        />

        <input
          type="date"
          required
        />

        <input
          type="time"
          required
        />

        <button>
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;