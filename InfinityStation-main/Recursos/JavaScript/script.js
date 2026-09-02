
//Validación captcha
function validarCaptcha() {
    let respuesta = document.getElementById("captcha").value;
    if (respuesta != 5) {
        let modal = new bootstrap.Modal(document.getElementById("captchaModal"));
        modal.show();

        return false;
    }
    return true;
}

//Boton ScrollUp
const scrollUpBtn = document.getElementById("scrollUpBtn");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollUpBtn.classList.remove("d-none");
  } else {
    scrollUpBtn.classList.add("d-none");
  }
});
scrollUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
