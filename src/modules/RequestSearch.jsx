import style from "../css/RequestSearch.module.css";
import magnify from '../assets/magnify.png';

function RequestSearch() {
    return(
        <>
        <div>
            <h2 className={style.h2}>Request</h2>
            <div className={style.searchDiv}>
                <img src={magnify} alt="" />
                <input type="text" className={style.search} placeholder="Search for users by their username" />
            </div>
        </div>
        
        <div className={style.noChat}>
            
        </div>

        </>
    )
}

export default RequestSearch