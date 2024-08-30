import style from '../css/SignUp.module.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const signUp = async () => {
    const result = 
    await fetch('http://localhost:3000/api/sign-up', {
        method: 'post',
        headers: { "Content-Type": "application/json",
                   'Access-Control-Allow-Methods': 'POST',
         },
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        })
    }).then(async res => {
        const a = await res.json();
        return a
    })
    return result.message
}

function SignUp() {
    const navigate = useNavigate();

    return(
        <>
            <form action="" className={style.form}>
                <img src={logo} alt="" className={style.img}/>
                <h1>Connect with your friends</h1>
                <input type="text" className={style.input} placeholder='First Name' id='firstName'/>
                <input type="text" className={style.input} placeholder='Last Name' id='lastName'/>
                <input type="text" className={style.input} placeholder='Email' id='email'/>
                <input type="password" className={style.input} placeholder='Password' id='password'/>
                <button type='button' className={style.btn} onClick={async () => {
                    const a = await signUp();
                    a?navigate('/'):console.log('failed');
                }}>Continue</button>
                <Link to='/'>log-in</Link>
            </form>
        </>
    );
}

export default SignUp