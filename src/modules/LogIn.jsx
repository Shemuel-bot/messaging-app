import style from "../css/LogIn.module.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const logIn = async () => {
  const value = await fetch("https://managing-tessi-third-guy-36437de9.koyeb.app/api/log-in", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  })
    .then(async (res) => {
      const a = await res.json();
      if (a !== false) localStorage.setItem("token", a.message);
      return true;
    })
    .catch((err) => {
      console.log(err);
    });

  return value;
};

function LogIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.form}>
        <img src={logo} alt="" className={style.img} />
        <h1>Connect with your friends</h1>
        <input
          type="email"
          className={style.input}
          placeholder="Email"
          id="email"
        />
        <input
          type="password"
          className={style.input}
          placeholder="Password"
          id="password"
        />
        <button
          type="button"
          className={style.btn}
          onClick={async () => {
            const a = await logIn();
            if (a) navigate("/home");
          }}
        >
          Continue
        </button>
        <Link to="sign-up">sign-up</Link>
      </div>
    </>
  );
}

export default LogIn;
