import style from '../css/ModuleDisplay.module.css';
import mailbox from '../assets/empty-mailbox.png';

function ModuleDisplay() {
    return(
        <>
        <div className={style.body}>
            <h3 id='chater'></h3>
         <div className={style.display}>
         </div>
         <div className={style.textdiv}>
            <input type="text" className={style.input} placeholder='Type something here.....'/>
            <button className={style.btn}>Send</button>
         </div>
        </div>
        </>
    )
}

export default ModuleDisplay