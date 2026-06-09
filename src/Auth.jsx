import { useState } from "react";

function Auth({
  setPage,
  setIsLoggedIn
}) {
  const [isLogin, setIsLogin] =
    useState(true);

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
      isLogin
        ? "Login Successful!"
        : "Account Created Successfully!"
    );

    setPage("consult");
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
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />
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