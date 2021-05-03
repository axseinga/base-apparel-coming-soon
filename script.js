const btn = document.querySelector("#button");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");
const sign = document.querySelector("#sign");
const clear = document.querySelector(".form__input");
const sub = document.querySelector("#subscribed");

btn.addEventListener("click", function () {
  if (!email.value.includes("@")) {
    msg.classList.remove("hidden");
    sign.classList.remove("hidden");
  } else {
    sub.classList.remove("hidden");
  }
});

clear.addEventListener("click", function () {
  msg.classList.add("hidden");
  sign.classList.add("hidden");
  sub.classList.add("hidden");
});
