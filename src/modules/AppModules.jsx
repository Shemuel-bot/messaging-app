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

            <Link to='request'>
            <img src={request} className={style.img} alt="request" />
            </Link>

            <Link to='archive' className={style.archiveLink}>
            <img src={archive} className={style.archiveImg} alt="archives" />
            </Link>
            <img src={profile} className={style.img} id='profile' alt="profile" />
        </div>
        </>
    )
}

export default AppModules