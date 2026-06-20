import { useState } from "react";
import { toast } from "react-toastify";
function Auth({
  setPage,
  setIsLoggedIn,
  setUser,
  setUserType
}) {
   const [isLogin, setIsLogin] = useState(true);
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");
   const [height, setHeight] = useState("");
   const [weight, setWeight] = useState("");
   const [bloodGroup, setBloodGroup] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isDoctorLogin,setIsDoctorLogin] =useState(false);
   const doctors = [
  {
    id: "DOC001",
    password: "doctor123",
    name: "Dr. Priya Sharma",
    specialization: "Psychiatrist",
    experience: "10 Years",
    qualification: "MBBS, MD Psychiatry",
    email: "priya@therameet.com"
  },

  {
    id: "DOC002",
    password: "doctor123",
    name: "Dr. Rajesh Kumar",
    specialization: "Therapist",
    experience: "8 Years",
    qualification:
      "M.Sc Clinical Psychology",
    email: "rajesh@therameet.com"
  },

  {
    id: "DOC003",
    password: "doctor123",
    name: "Dr. Anjali Verma",
    specialization:
      "Dermatologist",
    experience: "12 Years",
    qualification:
      "MBBS, MD Dermatology",
    email: "anjali@therameet.com"
  }
];
  const handleSubmit = (e) => {
  e.preventDefault();
  if (isDoctorLogin) {

  const doctor =
    doctors.find(
      (doc) =>
        doc.id === email &&
        doc.password === password
    );

  if (doctor) {

    setIsLoggedIn(true);

    setUser(doctor);

    setUserType("doctor");

    localStorage.setItem(
      "currentDoctor",
      JSON.stringify(doctor)
    );

    toast.success(
      "Doctor Login Successful"
    );

    setPage(
      "doctor-dashboard"
    );

    return;
  }

  toast.error(
    "Invalid Doctor Credentials"
  );

  return;
}

if (!isLogin) {
  const userData = {
  name,
  age,
  gender,
  height,
  weight,
  bloodGroup,
  phone,
  email,
  password,
  };

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const userExists =
    users.find(
      (user) =>
        user.email === email
    );

  if (userExists) {
    toast.warning(
      "User already registered!"
    );
    return;
  }

  users.push(userData);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  toast.success(
    "Account Created Successfully!"
  );

  setIsLogin(true);

setName("");
setAge("");
setGender("");
setHeight("");
setWeight("");
setBloodGroup("");
setPhone("");
} else {
    const users =
  JSON.parse(
    localStorage.getItem("users")
  ) || [];

const foundUser =
  users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

if (foundUser) {
  setIsLoggedIn(true);

  setUser(foundUser);

  setUserType("patient");

  localStorage.setItem(
    "currentUser",
    JSON.stringify(foundUser)
  );

  toast.success("Login Successful!");

  setPage("profile");
} else {
  toast.error("User does not exist");
}
  }
};

  return (
    <div className="login-page">
      <h2>
  {isDoctorLogin
    ? "Doctor Login"
    : isLogin
    ? "Patient Login"
    : "Create Account"}
</h2>

      <form onSubmit={handleSubmit}>

       {!isLogin &&
 !isDoctorLogin && (
  <div className="register-grid">

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value.toUpperCase())}
      className="full-width"
      required
    />

    <input
      type="number"
      placeholder="Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      required
    />

    <select
  value={gender}
  onChange={(e) =>
    setGender(e.target.value)
  }
  required
>
  <option value="">
    Select Gender
  </option>

  <option value="MALE">
    Male
  </option>

  <option value="FEMALE">
    Female
  </option>

  <option value="OTHER">
    Other
  </option>
  
</select>

    <input
      type="number"
      placeholder="Height (cm)"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      required
    />

    <input
      type="number"
      placeholder="Weight (kg)"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      required
    />

    <input
      type="text"
      placeholder="Blood Group"
      value={bloodGroup}
      onChange={(e) => setBloodGroup(e.target.value.toUpperCase())}
      required
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />

  </div>
)}

        <input
          type="text"
placeholder={
  isDoctorLogin
    ? "Doctor ID"
    : "Email"
}
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          {isLogin
            ? "Login"
            : "Create Account"}
        </button>
      </form>

      <p className="toggle-text">
        <p className="toggle-text">

  {!isDoctorLogin ? (
    <button
      className="switch-btn"
      onClick={() => {
        setIsDoctorLogin(true);
        setIsLogin(true);
      }}
    >
      Doctor Login
    </button>
  ) : (
    <button
      className="switch-btn"
      onClick={() =>
        setIsDoctorLogin(false)
      }
    >
      Patient Login
    </button>
  )}

</p>
        {isLogin
          ? "New user?"
          : "Already have an account?"}

        <button
          className="switch-btn"
          onClick={() =>
            setIsLogin(!isLogin)
          }
        >
          {isLogin
            ? " Create Account"
            : " Login"}
        </button>
      </p>
    </div>
  );
}

export default Auth;