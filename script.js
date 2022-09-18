const tongue = document.querySelector('.tongue');
const hands = document.querySelectorAll('.hand');
const face = document.querySelector('.face');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const showBtn = document.querySelector('.password-button');

const rotateFace = function() {
    const counter = username.value.length;
    if (counter > 40) {
        return;
    }
    face.style.transform = `rotate(${20 - counter}deg)`;
}

username.addEventListener("focus", rotateFace);
username.addEventListener("input", rotateFace);

username.addEventListener("blur", () => {
    face.style.transform = `rotate(0deg)`;
});

password.addEventListener("focus", () => {
    hands.forEach((hand) => {
        hand.classList.add("hide");
    });
});

password.addEventListener("blur", () => {
    hands.forEach((hand) => {
        hand.classList.remove("hide");
    });
});

showBtn.addEventListener("mousedown", () => {
    password.type = "text";
    hands.forEach((hand) => {
        hand.classList.remove("hide");
        hand.classList.add("peek");
    });
});

showBtn.addEventListener("mouseup", () => {
    password.type = "password";
    hands.forEach((hand) => {
        hand.classList.add("hide");
        hand.classList.remove("peek");
    });

    password.focus();
});

showBtn.addEventListener("mouseleave", () => {
    password.type = "password";
    hands.forEach((hand) => {
        hand.classList.add("hide");
        hand.classList.remove("peek");
    });

    password.focus();
});