import style from '../css/ChatDisplay.module.css';
import ChatSearch from './ChatSearch.jsx';
import PeopleSearch from './PeopleSearch.jsx';

function ChatDisplay() {
    return(
        <>
        <div className={style.body}>
            <ChatSearch />
        </div>
        </>
    )
}

export default ChatDisplay