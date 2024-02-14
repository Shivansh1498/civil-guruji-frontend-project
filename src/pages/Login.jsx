import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useState } from "react";
import { BASE_URL } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setAuthError } = useProductContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAuthError(null);
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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

  const handleGuestCredentials = () => {
    setEmail("guest@example.com");
    setPassword("guest123");
  };

  return (
    <main className="login-container">
      <h1>Login</h1>
      <form className="login-container__form-wrapper" onSubmit={handleSubmit}>
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
          disabled={email === "" || password === ""}
        >
          Login
        </button>
        <button
          type="button"
          className="custom-btn"
          onClick={handleGuestCredentials}
        >
          Guest Credentials
        </button>
      </form>
    </main>
  );
};

export default Login;
