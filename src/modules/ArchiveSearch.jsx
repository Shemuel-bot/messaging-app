import style from "../css/ArchiveSearch.module.css";

function ArchiveSearch() {
    return(
        <>
        <div>
            <h2 className={style.h2}>Archive</h2>
        </div>
        <div className={style.noChat}>
            <h1>No Archived Chats</h1>
        </div>

        </>
    )
}

export default ArchiveSearch