import style from '../css/SignUp.module.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function SignUp() {
    return(
        <>
            <form action="" className={style.form}>
                <img src={logo} alt="" className={style.img}/>
                <h1>Connect with your friends</h1>
                <input type="text" className={style.input} placeholder='First Name' name='firstName'/>
                <input type="text" className={style.input} placeholder='Last Name' name='lastName'/>
                <input type="text" className={style.input} placeholder='Email' name='email'/>
                <input type="password" className={style.input} placeholder='Password' name='password'/>
                <button className={style.btn}>Continue</button>
                <Link to='/'>log-in</Link>
            </form>
        </>
    );
}

export default SignUp