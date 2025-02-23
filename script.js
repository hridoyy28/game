// script.js

let poppedCount = 0;

function checkPassword() {
    const password = document.getElementById("password").value;
    const randomName = document.getElementById("randomName").value || "User";
    
    if (password === "1128") {
        alert(`Welcome ${randomName}!`);
        document.querySelector(".login-page").style.display = "none";
        document.querySelector(".balloon-page").style.display = "block";
    } else {
        alert("Incorrect password, please try again!");
    }
}

function popBalloon() {
    poppedCount++;
    if (poppedCount === 5) {
        document.getElementById("trophy").style.display = "inline-block";
    }
}

function showBirthdayMessage() {
    document.querySelector(".balloon-page").style.display = "none";
    document.querySelector(".message-page").style.display = "block";
}
