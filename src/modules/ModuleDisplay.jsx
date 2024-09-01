import style from '../css/ModuleDisplay.module.css';

const SendMessage = async () => {
  await  fetch('https://messenger-me.adaptable.app/api/send-message', {
        method: 'post',
        headers: {  "Content-Type": "application/json", 
                    authorization: `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({
            userId: Number(localStorage.getItem('chaterId')),
            message: document.getElementById('message').value,
        })
    }).then(async res => {
        const a = await res.json();
        if(a.value){
            const text = document.createElement('p');
            text.className = style.righttext;
            text.textContent = document.getElementById('message').value;
            document.getElementById('display').append(text);
        }

    })
    document.getElementById('message').value = '';
}

function ModuleDisplay() {
    return(
        <>
        <div className={style.body}>
            <h3 id='chater'></h3>
         <div className={style.display} id='display'>
         </div>
         <div className={style.textdiv}>
            <input type="text" className={style.input} id='message' placeholder='Type something here.....'/>
            <button className={style.btn} onClick={() => {SendMessage()}}>Send</button>
         </div>
        </div>
        </>
    )
}

export default ModuleDisplay