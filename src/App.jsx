import { useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Auth from "./Auth";
import ConsultDoctor from "./ConsultDoctor";
import BookAppointment from "./BookAppointment";
import Profile from "./Profile";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        />
      )}

      {page === "consult" &&
        isLoggedIn && <ConsultDoctor />}

      {page === "book" &&
        isLoggedIn && <BookAppointment />}

      {page === "profile" &&
        isLoggedIn && <Profile />}
    </> 
  );
}

export default App;
