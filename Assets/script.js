var thisHour = moment().format("HH");
var today = moment().format("MMM DD, YYYY");
var allHours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];

$(`#currentDay`).text(today);

console.log(thisHour);
console.log(today);


// changes color of block based on time - past, present, or future
function hourColor() {
    for (let index = 0; index < allHours.length; index++) {
        var workHour = document.getElementById(`t${allHours[index]}`).dataset.hour;
        var workHourEl = document.getElementById(`t${workHour}`)
        console.log(workHour);
        if (workHour < thisHour) {
            console.log(`${workHour} is in the past`);
            workHourEl.classList.add("past");
        } else if (workHour == thisHour) {
            console.log(`${workHour} is the present`);
            workHourEl.classList.add("present");
        } else {
            console.log(`${workHour} is coming up`);
            workHourEl.classList.add("future");
        }
    }
};
hourColor();


// save entered info to local storage
 function saveEvents() {
     for (let j = 0; j < allHours.length; j++) {
         var plannedEvent = allHours[j];
         var savedEvent = document.getElementById(`t${plannedEvent}`);
         var storedEvent = JSON.parse(localStorage.getItem(`${plannedEvent}th`));
         if (storedEvent !== null) {
             savedEvent.setAttribute("value", storedEvent);
         }
     }
 }
saveEvents();

//button

document.addEventListener("click", function (event) {
    if (event.target.matches(".btn")) {
        var buttonHour = event.target.dataset.btn;
        console.log(buttonHour);
        var eventInput = document.getElementById(`t${buttonHour}`).value;
        localStorage.setItem(`${buttonHour}th`, JSON.stringify(eventInput))
    }
});