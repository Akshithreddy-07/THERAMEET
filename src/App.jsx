import { useState } from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Auth from "./Auth";
import ConsultDoctor from "./ConsultDoctor";
import BookAppointment from "./BookAppointment";
import Profile from "./Profile";
import MyAppointments from "./MyAppointments";
import "./App.css";
import About from "./About";
import DoctorDashboard from "./DoctorDashboard";
import DoctorAppointments from "./DoctorAppointments";
function App() {
  const [page, setPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] =
  useState(null);
  const [userType, setUserType] =useState("patient");
  return (
    <>
      <Navbar
        setPage={setPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userType={userType}
      />

      {page === "home" && <Home />}

      {page === "auth" && (
        <Auth
          setPage={setPage}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
          setUserType={setUserType}
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

     {page === "about" && <About />}

     {page === "doctor-dashboard" &&
  isLoggedIn &&
  userType === "doctor" && (
    <DoctorDashboard
      doctor={user}
    />
)}

{page === "doctor-appointments" &&
  isLoggedIn &&
  userType === "doctor" && (
    <DoctorAppointments
      doctor={user}
    />
)}

    <ToastContainer
       position="top-right"
       autoClose={3000}
       theme="dark"/>    
    </> 
  );
}

export default App;
