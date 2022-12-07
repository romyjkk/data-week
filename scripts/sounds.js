// variables

const theLess = new Audio('../sounds/thelessiknowthebetter.mp3');
const letItHappen = new Audio('../sounds/letithappen.mp3');
const newPerson = new Audio('../sounds/newperson.mp3');
const eventually = new Audio('../sounds/eventually.mp3');
const yesImChanging = new Audio('../sounds/yesimchanging.mp3');

const theLessButton = document.querySelector('ul.buttons li:first-of-type div.playbutton');
theLessButton.addEventListener('click', toggleTheLess);

const letItHappenButton = document.querySelector('ul.buttons li:nth-of-type(2) div.playbutton');
letItHappenButton.addEventListener('click', toggleLetItHappen);

const newPersonButton = document.querySelector('ul.buttons li:nth-of-type(3) div.playbutton');
newPersonButton.addEventListener('click', toggleNewPerson);

const eventuallyButton = document.querySelector('ul.buttons li:nth-of-type(4) div.playbutton');
eventuallyButton.addEventListener('click', toggleEventually);

const yesImChangingButton = document.querySelector('ul.buttons li:nth-of-type(5) div.playbutton');
yesImChangingButton.addEventListener('click', toggleYesImChanging);

function toggleTheLess() {
    if (theLess.paused) {
        theLess.play();
    } else {
        theLess.pause();
    }
}

function toggleLetItHappen() {
    if (letItHappen.paused) {
        letItHappen.play();
    } else {
        letItHappen.pause();
    }
}

function toggleNewPerson() {
    if (newPerson.paused) {
        newPerson.play();
    } else {
        newPerson.pause();
    }
}

function toggleEventually() {
    if (eventually.paused) {
        eventually.play();
    } else {
        eventually.pause();
    }
}

function toggleYesImChanging() {
    if (yesImChanging.paused) {
        yesImChanging.play();
    } else {
        yesImChanging.pause();
    }
}