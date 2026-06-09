import { useState } from "react";

function Signup({
  setPage,
  setIsLoggedIn
}) {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);

    alert(
      "Account Created Successfully!"
    );

    setPage("consult");
  };

  return (
    <div className="login-page">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />

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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;