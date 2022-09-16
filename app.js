const unreadMsgs = document.querySelectorAll(".unread");
const msgNum = document.querySelector(".heading h1 span");
const msgBtn = document.querySelector(".heading p");

msgBtn.addEventListener("click", () => {
  unreadMsgs.forEach((msg) => {
    msg.classList.remove("unread");
    msgNum.textContent = 0;
  });
});
