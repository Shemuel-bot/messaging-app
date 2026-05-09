import style from "../css/ModuleDisplay.module.css";

async function Display(id, name) {
  const display = document.querySelector("#display");
  if (display) {
    display.innerHTML = "";
  }

  const messages = await fetch(
    "https://managing-tessi-third-guy-36437de9.koyeb.app/api/get-messages",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId: id,
      }),
    }
  ).then(async (res) => {
    const a = await res.json();
    return a;
  });

  if (messages.value != false) {
    messages.value.forEach((element) => {
      const text = document.createElement("p");
      text.textContent = element.message;

      const conversationUserId = Number(id);
      const senderId = Number(element.from);

      if (senderId === conversationUserId) text.className = style.lefttext;
      else text.className = style.righttext;

      document.querySelector(`.${style.display}`).append(text);
    });
  }
  localStorage.setItem("chaterId", id);
  document.getElementById("chater").textContent = name;
}

export default Display;
