function Navbar({
  setPage,
  isLoggedIn,
  setIsLoggedIn,
  userType
}) {
  return (
    <nav className="navbar">
      <h2
        className="logo"
        onClick={() => setPage("home")}
      >
        TheraMeet
      </h2>

      <div className="nav-links">
        {!isLoggedIn ? (
          <button
            onClick={() => setPage("auth")}
          >
            Login / Sign Up
          </button>
        ): userType === "doctor" ? (

        <>
         <button
      onClick={() =>
        setPage("doctor-dashboard")
      }
    >
      Dashboard
         </button>

         <button
      onClick={() =>
        setPage("doctor-appointments")
      }
    >
      Appointments
         </button>

         <button
      onClick={() => {
        setIsLoggedIn(false);
        localStorage.removeItem(
  "currentUser"
);
localStorage.removeItem(
  "currentDoctor"
);
        setPage("home");
      }}
    >
      Logout
         </button>
      </>

        )  : (
          <>
            <button
              onClick={() => setPage("consult")}
            >
              Consult Doctor
            </button>

            <button
              onClick={() => setPage("appointments")}
            >
              My Appointments
            </button>

            <button
              onClick={() => setPage("profile")}
            >
              My Profile
            </button>

            <button
              onClick={() =>setPage("about")}
            >       
              About
            </button>

            <button
              onClick={() => {
                setIsLoggedIn(false);
                localStorage.removeItem(
  "currentUser"
);
localStorage.removeItem(
  "currentDoctor"
);
                setPage("home");
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;