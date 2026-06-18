import { useState } from "react";
import { toast } from "react-toastify";

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

    toast.success(
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

        {!isLogin && (
  <>
    <input
      type="number"
      placeholder="Age"
      value={age}
      onChange={(e) =>
        setAge(e.target.value)
      }
      required
    />

    <input
      type="text"
      placeholder="Gender"
      value={gender}
      onChange={(e) =>
        setGender(e.target.value)
      }
      required
    />

    <input
      type="number"
      placeholder="Height (cm)"
      value={height}
      onChange={(e) =>
        setHeight(e.target.value)
      }
      required
    />

    <input
      type="number"
      placeholder="Weight (kg)"
      value={weight}
      onChange={(e) =>
        setWeight(e.target.value)
      }
      required
    />

    <input
      type="text"
      placeholder="Blood Group"
      value={bloodGroup}
      onChange={(e) =>
        setBloodGroup(e.target.value)
      }
      required
    />

    <input
      type="tel"
      placeholder="Phone Number"
      value={phone}
      onChange={(e) =>
        setPhone(e.target.value)
      }
      required
    />
  </>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;