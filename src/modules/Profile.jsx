import { useEffect, useState } from "react";
import profile from "../assets/account-circle-outline.png";
import style from "../css/Profile.module.css";
import { useNavigate } from "react-router-dom";

const Update = async () => {
  await fetch("https://managing-tessi-third-guy-36437de9.koyeb.app/api/update", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      about: document.getElementById("about").value,
    }),
  }).then(async (res) => {
    const a = await res.json();
    if (a.value !== false) localStorage.setItem("token", a.value);
    location.reload();
  });
};

function Profile() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://managing-tessi-third-guy-36437de9.koyeb.app/api/home", {
      method: "get",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(async (res) => {
      const a = await res.json();
      if (a.value !== false) {
        const UI = [];
        UI.push(
          <div key="firstNameGroup" className={style.inputGroup}>
            <label htmlFor="firstName" className={style.label}>First Name</label>
            <input
              type="text"
              className={style.input}
              id="firstName"
              defaultValue={a.value.user.firstName}
            />
          </div>,
          <div key="lastNameGroup" className={style.inputGroup}>
            <label htmlFor="lastName" className={style.label}>Last Name</label>
            <input
              type="text"
              className={style.input}
              id="lastName"
              defaultValue={a.value.user.lastName}
            />
          </div>,
          <div key="emailGroup" className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>Email</label>
            <input
              type="email"
              className={style.input}
              id="email"
              defaultValue={a.value.user.email}
            />
          </div>,
          <div key="passwordGroup" className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>Password</label>
            <input
              type="password"
              className={style.input}
              id="password"
              placeholder="Enter new password"
            />
          </div>,
          <div key="aboutGroup" className={style.inputGroup}>
            <label htmlFor="about" className={style.label}>About</label>
            <textarea
              className={style.textarea}
              defaultValue={a.value.user.about}
              id="about"
            ></textarea>
          </div>
        );
        setUser(UI);
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <div className={style.body}>
        <div className={style.fields}>
          {user}
          <div className={style.buttonGroup}>
            <button
              className={style.btn}
              onClick={() => {
                Update();
              }}
            >
              Update
            </button>
            <button
              className={style.btn}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              Log Out
            </button>
          </div>
        </div>
        <img src={profile} alt="" className={style.img} />
      </div>
    </>
  );
}

export default Profile;
