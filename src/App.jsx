import { useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Auth from "./Auth";
import ConsultDoctor from "./ConsultDoctor";
import BookAppointment from "./BookAppointment";
import Profile from "./Profile";
import MyAppointments from "./MyAppointments";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] =
  useState(null);
  return (
    <>
      <Navbar
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {page === "home" && <Home />}

      {page === "auth" && (
        <Auth
          setPage={setPage}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
        />
      )}

      {page === "consult" &&
        isLoggedIn && <ConsultDoctor
  setSelectedDoctor={setSelectedDoctor}
  setPage={setPage}
/>}

  {page === "book" &&
  isLoggedIn && (
    <BookAppointment
      selectedDoctor={selectedDoctor}
      user={user}
    />
  )
}
    {page === "appointments" &&
  isLoggedIn && (
    <MyAppointments
      user={user}
    />
)}
      {page === "profile" &&
        isLoggedIn && (<Profile user={user} />)}
    </> 
  );
}

export default App;
