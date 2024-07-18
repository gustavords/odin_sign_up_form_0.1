const password = document.querySelector(`#pw`);
const confirm_password = document.querySelector(`#confirm_pw`);
const form = document.querySelector(`#create_user`);
const visual_queue = document.querySelectorAll(`[type="password"]+span`);


document.addEventListener(`DOMContentLoaded`, () => {
    visual_queue.forEach((node) => {
        node.classList.remove("form-accept");
    });
});

form.addEventListener(`input`, (e) => {
    if (e.target.name == `password` || e.target.name == `confirm_password`) {
        if (password.value == confirm_password.value && password.checkValidity() && confirm_password.checkValidity()) {
            console.log(e.target.checkValidity());
            visual_queue.forEach((node) => {
                node.classList.add("form-accept");
            });
        }
    }
});