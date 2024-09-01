import style from '../css/AppModules.module.css';
import chat from '../assets/chat.png';
import people from '../assets/account-group.png';
import request from '../assets/chat-processing.png';
import archive from '../assets/archive.png';
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
            <img src={profile} className={style.img} id='profile' alt="profile" />
        </div>
        </>
    )
}

export default AppModules