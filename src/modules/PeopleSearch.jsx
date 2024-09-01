import style from "../css/PeopleSearch.module.css";
import profile from '../assets/account-circle-outline.png';
import { useEffect, useState } from "react";
import Display from "./MessageDisplay";

function PeopleSearch() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://messenger-me.adaptable.app/api/get-people', {
            method: 'get',
            headers: {"Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("token")}`
            },
        }).then(async res => {
            const users = await res.json();
            const UI = []
            users.users.forEach(x => {
                UI.push(
                    <button key={x.id} className={style.btn} onClick={async () => {await Display(x.id, x.firstName)}}>
                        <img src={profile} className={style.img} alt="" />
                        <h3 id={x.firstName}>{x.firstName}</h3>
                    </button>
                )
            });
            setPeople(UI)
        })
    }, []);

    return(
        <>
            <h2 className={style.h2}>People</h2>
        
        <div className={style.noChat}>
            {people}
        </div>

        </>
    )
}

export default PeopleSearch