import style from '../css/ModuleDisplay.module.css';
import mailbox from '../assets/empty-mailbox.png';

function ModuleDisplay() {
    return(
        <>
        <div className={style.body}>
        <img src={mailbox} className={style.img} alt="" />
        <h1>No messages here</h1>
        </div>
        </>
    )
}

export default ModuleDisplay