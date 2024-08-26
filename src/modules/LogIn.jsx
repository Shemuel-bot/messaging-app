import style from '../css/LogIn.module.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function LogIn() {
    return(
        <>
            <form action="" className={style.form}>
                <img src={logo} alt="" className={style.img}/>
                <h1>Connect with your friends</h1>
                <input type="text" className={style.input} placeholder='Email' name='email'/>
                <input type="password" className={style.input} placeholder='Password' name='password'/>
                <button className={style.btn}>Continue</button>
                <Link to='sign-up'>sign-up</Link>
            </form>
        </>
    );
}

export default LogIn