import style from '../css/AppModules.module.css';
import chat from '../assets/chat.png';
import people from '../assets/account-group.png';
import profile from '../assets/account-circle-outline.png';
import { Link } from 'react-router-dom';

function AppModules() {
    return(
        <>
        <div className={style.body}>
            <Link to='chat'>
            <img src={chat} className={style.img} alt="chat"/>
            </Link>

            <Link to='people'>
            <img src={people} className={style.img} alt="people" />
            </Link>

            <Link className={style.archiveLink}>
            </Link>
            <Link to='/profile'>
            <img src={profile} className={style.img} id='profile' alt="profile" />
            </Link>
        </div>
        </>
    )
}

export default AppModules