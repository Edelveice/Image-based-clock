const hoursOneElement = document.getElementById("hoursOne");
const hoursTwoElement = document.getElementById("hoursTwo");
const minutesOneElement = document.getElementById("minutesOne");
const minutesTwoElement = document.getElementById("minutesTwo");
const secondsOneElement = document.getElementById("secondsOne");
const secondsTwoElement = document.getElementById("secondsTwo");

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursOne = Math.floor(hours / 10);
    const hoursTwo = hours % 10;
    const minutesOne = Math.floor(minutes / 10);
    const minutesTwo = minutes % 10;
    const secondsOne = Math.floor(seconds / 10);
    const secondsTwo = seconds % 10;

    updateElement(hoursOneElement, hoursOne);
    updateElement(hoursTwoElement, hoursTwo);
    updateElement(minutesOneElement, minutesOne);
    updateElement(minutesTwoElement, minutesTwo);
    updateElement(secondsOneElement, secondsOne);
    updateElement(secondsTwoElement, secondsTwo);
};

function updateElement(element, newValue) {
    const currentAlt = element.getAttribute("alt");
    if (currentAlt !== newValue.toString()) {
        element.innerHTML = `<img src="pictures/pngegg(${newValue}).png" alt="${newValue}">`;
        element.setAttribute("alt", newValue);
    }
}


function updateDate() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const dateElement = document.getElementById("date");
    dateElement.innerText = `${day}, ${month} ${now.getDate()}, ${year}`;
}

updateDate();
updateClock();

setInterval(function() {
    updateClock();
    updateDate();
}, 1000);

