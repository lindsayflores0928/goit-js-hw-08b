import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");

const localSetter = () => {
    const fd = new FormData(feedbackForm);
    const obj = Object.fromEntries(fd);

    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}

const formData = (e) => {
    e.preventDefault();
    const { email, message} = e.target;
    const fd = new FormData(feedbackForm);
    const obj = Object.fromEntries(fd);

    if (email.value !== "" && message.value !== "") {
        localStorage.removeItem("feedback-form-state");
        feedbackForm.reset();
        console.log(obj);
    } else {
        alert("Fill up the fields first!");
    }
    
}

feedbackForm.addEventListener("input", throttle(localSetter, 500));
feedbackForm.addEventListener("submit", formData);

let localData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
} 