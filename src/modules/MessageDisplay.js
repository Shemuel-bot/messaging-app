import style from "../css/ModuleDisplay.module.css";

async function Display(id, name) {
  const messages = await fetch("http://localhost:3000/api/get-messages", {
    method: "post",
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
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
  document.getElementById('chater').textContent = name;
}

export default Display
