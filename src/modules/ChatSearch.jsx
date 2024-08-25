import style from '../css/ChatSearch.module.css';
import NoChats from '../assets/No-Chats.png';

function ChatSearch() {
    return(
        <>
        <div>
        <h2 className={style.h2}>Chats</h2>
        </div>
        <div className={style.noChat}>
            <img src={NoChats} className={style.img} alt="" />
        </div>
        </>
    )
}

export default ChatSearch