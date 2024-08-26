import style from '../css/ChatDisplay.module.css';
import { Outlet } from 'react-router-dom';
function ChatDisplay() {
    return(
        <>
        <div className={style.body}>
            <Outlet />
        </div>
        </>
    )
}

export default ChatDisplay