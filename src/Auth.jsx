import { useState } from "react";
import { toast } from "react-toastify";
function Auth({
  setPage,
  setIsLoggedIn,
  setUser
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

  const handleSubmit = (e) => {
  e.preventDefault();

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
  setEmail("");
  setPassword("");
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
        {isLogin
          ? "Login"
          : "Create Account"}
      </h2>

      <form onSubmit={handleSubmit}>

       {!isLogin && (
  <div className="register-grid">

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
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

    <input
      type="text"
      placeholder="Gender"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      required
    />

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
      onChange={(e) => setBloodGroup(e.target.value)}
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
          type="email"
          placeholder="Email"
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