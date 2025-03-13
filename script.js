let clickCountYes = 0;
let clickCountNo = 0;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionBox = document.getElementById('questionBox');
const messageBox = document.getElementById('messageBox');
const emojiEffect = document.getElementById('emojiEffect');
const appreciationMessage = document.getElementById('appreciationMessage');

// Variable to track what the user selects
let userSelection = null;

yesButton.addEventListener('click', () => {
    clickCountYes++;
    userSelection = "Yes"; // Track that the user selected Yes

    // Change question based on progress
    if (clickCountYes === 1) {
        questionBox.innerHTML = '<p>Are you ready for this? 😏</p>';
    } else if (clickCountYes === 2) {
        questionBox.innerHTML = '<p>Do you want to be my partner? 💖</p>';
    } else if (clickCountYes === 3) {
        questionBox.innerHTML = '<p>Are you sure? 😘</p>';
    } else if (clickCountYes === 4) {
        questionBox.innerHTML = '<p>Let’s make this official! 🥰</p>';
    } else if (clickCountYes === 5) {
        questionBox.innerHTML = '<p>You’ve won my heart! ❤️</p>';
        emojiEffect.classList.remove('hidden');
        noButton.classList.add('hidden');
        messageBox.classList.remove('hidden');
    }
    console.log('User clicked Yes'); // Track Yes click in console
});

noButton.addEventListener('click', () => {
    clickCountNo++;
    userSelection = "No"; // Track that the user selected No

    // If No is clicked too many times
    if (clickCountNo >= 4) {
        questionBox.innerHTML = "<p>Guess it's not meant to be... 😔</p>";
        noButton.classList.add('hidden');
        yesButton.classList.add('hidden');
    }
    console.log('User clicked No'); // Track No click in console
});

// Send message after typing
function sendMessage() {
    const message = appreciationMessage.value.trim();

    if (message) {
        messageBox.innerHTML = `<p>Your love message: ${message} 💖</p>`;
        messageBox.style.fontSize = '25px';
        emojiEffect.classList.add('hidden');
        setTimeout(() => alert("Message Sent 💌"), 500);
    } else {
        alert("Please write something before sending! ❤️");
    }

    console.log(`User's selection: ${userSelection}`); // Show what the user clicked (Yes or No)
}
