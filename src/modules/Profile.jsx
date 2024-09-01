import { useEffect, useState } from 'react';
import profile from '../assets/account-circle-outline.png';
import style from'../css/Profile.module.css';
import { useNavigate } from 'react-router-dom';


const Update = () => {
    fetch('https://messenger-me.adaptable.app/api/update', {
        method: 'post',
        headers: {  "Content-Type": "application/json", 
            authorization: `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            about: document.getElementById('about').value
        })
    }).then(async res => {
        const a = await res.json()
        if(a.value !== false)
            localStorage.setItem('token', a.value);
        location.reload();
    })
}

function Profile() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://messenger-me.adaptable.app/api/home', {
          method: 'get',
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        }).then(async res => {
          const a = await res.json();
          if(a.value !== false){
            const UI = [];
            UI.push(
                <input type="text" key={1} className={style.input} id='firstName' defaultValue={a.value.user.firstName} />,
                <input type="text" key={2} className={style.input} id='lastName' defaultValue={a.value.user.lastName}/>,
                <input type="email" key={3} className={style.input} id='email' defaultValue={a.value.user.email}/>,
                <input type="password" key={4} className={style.input} id='password' placeholder='Password'/>,
                <h3>About</h3>,
                <textarea name="" defaultValue={a.value.user.about} id="about"></textarea>
            )
            setUser(UI)
          }else{
            navigate('/');
          }
        })
      }, [])

    return(
        <>
        <div className={style.body}>
        <h1>Profile</h1>
        <img src={profile} alt="" className={style.img}/>
        <div className={style.fields}>
            {user}
            <button className={style.btn} onClick={() => {Update()}}>Update</button>
            <button className={style.btn} onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
            }}>Log Out</button>
        </div>
        </div>
        </>
    )
}

export default Profile