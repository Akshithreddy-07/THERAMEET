function Navbar({
  setPage,
  isLoggedIn,
  setIsLoggedIn
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
        ) : (
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
              onClick={() => {
                setIsLoggedIn(false);
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