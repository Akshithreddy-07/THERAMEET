import { useState } from "react";
toast.success("Appointment Booked Successfully!");
function Login({
  setPage,
  setIsLoggedIn
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);

    toast.success("Login Successful!");

    setPage("consult");
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;