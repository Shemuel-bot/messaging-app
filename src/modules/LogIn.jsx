import style from '../css/LogIn.module.css';
import logo from '../assets/logo.png';

function LogIn() {
    return(
        <>
            <form action="" className={style.form}>
                <img src={logo} alt="" className={style.img}/>
                <h1>Connect with your friends</h1>
                <input type="text" className={style.input} placeholder='Email'/>
                <input type="text" className={style.input} placeholder='Password'/>
                <button className={style.btn}>Continue</button>
            </form>
        </>
    );
}

export default LogIn