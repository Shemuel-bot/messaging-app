import { useState } from "react";
import style from "../css/LogIn.module.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const logIn = async ({ email, password }) => {
  try {
    const response = await fetch(
      "https://managing-tessi-third-guy-36437de9.koyeb.app/api/log-in",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    if (result !== false && result?.message) {
      localStorage.setItem("token", result.message);
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    const success = await logIn({ email, password });
    setIsLoading(false);

    if (success) {
      navigate("/home");
    }
  };

  return (
    <div className={style.form}>
      <img src={logo} alt="" className={style.img} />
      <h1>Connect with your friends</h1>
      <input
        type="email"
        className={style.input}
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className={style.inputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          className={style.input}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="button"
          className={style.toggleBtn}
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <img src="https://img.icons8.com/?size=100&id=100236&format=png&color=000000" alt="" /> : <img src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000" alt="" />}
        </button>
      </div>
      <button
        type="button"
        className={style.btn}
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            Signing in
            <span className={style.spinner} />
          </>
        ) : (
          "Continue"
        )}
      </button>
      <Link to="sign-up">sign-up</Link>
    </div>
  );
}

export default LogIn;
