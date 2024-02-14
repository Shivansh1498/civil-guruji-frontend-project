import { useState } from "react";
import { BASE_URL } from "../constants";
import { useProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setAuthError } = useProductContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAuthError(null);
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const result = await response.json();
      localStorage.setItem("token", result.token);
      if (result.status === "error") {
        setAuthError(result);
        alert(result.message);
      } else {
        setUser(result);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setAuthError(error);
    }
  };

  return (
    <main className="signup-container">
      <h1>Signup</h1>
      <form className="signup-container__form-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          className="input-box"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          className="input-box"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="input-box"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="custom-btn"
          disabled={username === "" || email === "" || password === ""}
        >
          Signup
        </button>
      </form>
    </main>
  );
};

export default Signup;
