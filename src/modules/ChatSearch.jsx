import style from '../css/ChatSearch.module.css';
import NoChats from '../assets/No-Chats.png';
import profile from '../assets/account-circle-outline.png';
import { useEffect, useState } from 'react';
import Display from "./MessageDisplay";

function ChatSearch() {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        fetch('https://messenger-me.adaptable.app/api/get-chats', {
            method: 'get',
            headers: {"Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`
            },
        }).then(async res => {
            const users = await res.json();
            const UI = []
            users.chats.forEach(x => {
                UI.push(
                    <button key={x.id} className={style.btn} onClick={async () => {await Display(x.id, x.firstName)}}>
                        <img src={profile} className={style.img} alt="" />
                        <h3>{x.firstName}</h3>
                    </button>
                )
            });
            setChats(UI)
        })
    }, []);
    return(
        <>
        <h2 className={style.h2}>Chats</h2>
        
        <div className={style.noChat}>
            <img src={NoChats} hidden className={style.img} alt="" />
            {chats}
        </div>
        </>
    )
}

export default ChatSearch