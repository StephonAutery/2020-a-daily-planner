console.log("let's begin here ...");
console.log("--------------------")
var timeDiv = $('<div id="time-block"></div>').text("let's begin here ...");

var rowDiv = $('<div id="row" class="row"></div>');
$(".jumbotron").append(timeDiv);

var amTxt = "am";
var pmTxt = "pm";
var eventState = "";

for (let i = 0; i < 9; i++) {
    var rowDiv = $('<div id="row" class="row"></div>');
    var momentHour = moment().format("h");
    var amPm = moment().format("a");
    $(".container").append(rowDiv);
    var hoursA = i + 9;
    var hoursP = i - 3;

    function hours() {
        if (i <= 3 && hoursA === momentHour) {
            // console.log("Apresent - hoursA : " + hoursA);
            eventState = "present";
            return hoursA + amTxt;
        } else if (i <= 3 && momentHour < hoursA && amPm === "am") {
            // console.log("Afuture - hoursA : " + hoursA);
            eventState = "future";
            return hoursA + amTxt;
        }
        else if (i <= 3 && amPm === "pm") {
            // console.log(" APast - hoursA : " + hoursA);
            eventState = "past";
            return hoursA + amTxt;
        } else if (hoursP === momentHour) {
            // console.log(" hoursA : " + hoursA);
            eventState = "present";
            return hoursA + amTxt;
        } else if (hoursP > momentHour) {
            // console.log(" hoursP : " + hoursP);
            eventState = "future";
            return hoursP + pmTxt;
        }
        else if (hoursP < momentHour) {
            // console.log(" hoursP : " + hoursP);
            eventState = "past";
            return hoursP + pmTxt;
        }
    }

    // console.log(" ---> " + eventState);
    // console.log(hours());
    var hourDiv = $('<div id="hour"></div>').text(hours());
    hourDiv.attr("class", "hour col-3 ");
    rowDiv.append(hourDiv);
    var eventDiv = $('<input type="textarea" id="event"></div>');
    eventDiv.attr("class", "time-block col-6 " + eventState);
    rowDiv.append(eventDiv);
    var saveDiv = $('<button id="save"></button>').text("save");
    saveDiv.attr("class", "saveBtn col-3");
    rowDiv.append(saveDiv);
}

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))