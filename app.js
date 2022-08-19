// SCOREBOARD DISPLAYS

let homeBoard = document.getElementById("scoreboard-home");
let awayBoard = document.getElementById("scoreboard-away");

// COUNTER SET TO 0 FOR HOME AND AWAY TEAMS

let homeCount = 0;
let awayCount = 0;

// FUNCTIONS FOR INCREMENTING THE SCORE

function homeByOne() {
    homeCount += 1;
    homeBoard.textContent = homeCount;
}

function homeByTwo() {
    homeCount += 2;
    homeBoard.textContent = homeCount;
}

function homeByThree() {
    homeCount += 3;
    homeBoard.textContent = homeCount;
}

// AWAY BOARD INCREMENTOR FUNCTIONS 

function awayByOne() {
    awayCount += 1;
    awayBoard.textContent = awayCount;
}

function awayByTwo() {
    awayCount += 2;
    awayBoard.textContent = awayCount;
}

function awayByThree() {
    awayCount += 3;
    awayBoard.textContent = awayCount;
}

// FUNCTIONS FOR CLEARING BOARDS TO 0

function clearHome() {
    homeBoard.textContent = 0;
    homeCount = 0;
}

function clearAway() {
    awayBoard.textContent = 0;
    awayCount = 0;
}

// BUTTONS FOR INCREMENTING 

// HOME BUTTONS

let homeOneBtn = document.getElementById("byOneHome");
let homeTwoBtn = document.getElementById("byTwoHome");
let homeThreeBtn = document.getElementById("byThreeHome");


// AWAY BUTTONS 

let awayOneBtn = document.getElementById("byOneAway");
let awayTwoBtn = document.getElementById("byTwoAway");
let awayThreeBtn = document.getElementById("byThreeAway");

// CLEAR BUTTONS

let homeClear = document.getElementById("clearHome");
let awayClear = document.getElementById("clearAway");


// EVENT LISTENERS

homeOneBtn.onclick = homeByOne;
homeTwoBtn.onclick = homeByTwo;
homeThreeBtn.onclick = homeByThree;

awayOneBtn.onclick = awayByOne;
awayTwoBtn.onclick = awayByTwo;
awayThreeBtn.onclick = awayByThree;

homeClear.onclick = clearHome;
awayClear.onclick = clearAway;