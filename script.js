const requestBtn = document.getElementById("requestBtn");
const email = document.getElementById("email");
const warning = document.getElementById("emailWarning");
const form = document.getElementById("form");

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const show = () => {
  warning.classList.add("visible");
  email.classList.add("active");
};

const hide = () => {
  warning.classList.remove("visible");
  email.classList.remove("active");
};

requestBtn.addEventListener("click", (e) => {
  let value = email.value;
  e.preventDefault();
  if (re.test(value)) {
    hide();
  } else {
    show();
  }
});
