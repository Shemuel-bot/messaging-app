import style from "../css/ModuleDisplay.module.css";

async function Display(id, name) {
  const oldTexts = document.querySelector('#display').childNodes;
  oldTexts.forEach(element => {
    element.remove()
  });
  if(oldTexts.length > 0)
    oldTexts[0].remove();
 
  const messages = await fetch("https://messenger-me.adaptable.app/api/get-messages", {
    method: "post",
    headers: { "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}` },
    body: JSON.stringify({
      userId: id,
    }),
  }).then(async (res) => {
    const a = await res.json();
    return a;
  });

  if (messages.value != false) {
    messages.value.forEach((element) => {
      const text = document.createElement("p");
      text.textContent = element.message;

      if (element.from === messages.id) text.className = style.righttext;
      else text.className = style.lefttext;

      document.querySelector(`.${style.display}`).append(text)
    });
  }
  localStorage.setItem('chaterId', id)
  document.getElementById('chater').textContent = name;
}

export default Display
