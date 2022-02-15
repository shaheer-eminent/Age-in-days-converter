// Age in Days
function ageInDays() {
    let userAge = prompt("What's your current age?");
    let ageDays = userAge * 365;
    document.getElementById("age__result").innerText = "You are " + ageDays + " days old 🥳.";
}

function reset() {
    document.getElementById("age__result").innerText ="Excited? Count again!";
}
