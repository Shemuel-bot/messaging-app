import style from "../css/PeopleSearch.module.css";
import people from '../assets/account-group.png';

function PeopleSearch() {
    return(
        <>
        <div>
            <h2 className={style.h2}>People</h2>
        </div>
        <div className={style.noChat}>
            <h1>No Friends Here</h1>
        </div>

        </>
    )
}

export default PeopleSearch