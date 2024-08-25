import style from '../css/AppModules.module.css';
import chat from '../assets/chat.png';
import people from '../assets/account-group.png';
import request from '../assets/chat-processing.png';
import archive from '../assets/archive.png';
import profile from '../assets/account-circle-outline.png';

function AppModules() {
    return(
        <>
        <div className={style.body}>
            <img src={chat} className={style.img} alt="chat"/>
            <img src={people} className={style.img} alt="people" />
            <img src={request} className={style.img} alt="request" />
            <img src={archive} className={style.archiveImg} alt="archives" />
            <img src={profile} className={style.img} id='profile' alt="profile" />
        </div>
        </>
    )
}

export default AppModules