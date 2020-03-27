console.log("let's begin here ...");
console.log("--------------------")
var timeDiv = $('<div id="time-block"></div>').text("let's begin here ...");

var rowDiv = $('<div id="row" class="row"></div>');
$(".jumbotron").append(timeDiv);

var amTxt = "am";
var pmTxt = "pm";
var eventState = "";
var hoursA = "";
var hoursP = "";
var uId = "";

for (let i = 0; i < 9; i++) {
    var rowDiv = $('<div id="row" class="row"></div>');
    var momentHour = moment().format("h");
    var amPm = moment().format("a");
    $(".container").append(rowDiv);
    hoursA = i + 9;
    hoursP = i - 3;

    function hours() {
        if (i <= 3 && hoursA === momentHour) {
            // console.log("Apresent - hoursA : " + hoursA);
            eventState = "present";
            uId = hoursA + amTxt;
            return uId;
        } else if (i <= 3 && momentHour < hoursA && amPm === "am") {
            // console.log("Afuture - hoursA : " + hoursA);
            eventState = "future";
            uId = hoursA + amTxt;
            return uId;
        }
        else if (i <= 3 && amPm === "pm") {
            // console.log(" APast - hoursA : " + hoursA);
            eventState = "past";
            uId = hoursA + amTxt;
            return uId;
        } else if (hoursP === momentHour) {
            // console.log(" hoursA : " + hoursA);
            eventState = "present";
            uId = hoursP + pmTxt
            return uId;
        } else if (hoursP > momentHour) {
            // console.log(" hoursP : " + hoursP);
            eventState = "future";
            uId = hoursP + pmTxt
            return uId;
        }
        else if (hoursP < momentHour) {
            // console.log(" hoursP : " + hoursP);
            eventState = "past";
            uId = hoursP + pmTxt
            return uId;
        }
    }
    // console.log(" ---> " + eventState);
    // console.log(hours());
    var hourDiv = $('<div id="hour'+ hours() +'" data-hour="'+ hours() +'"></div>').text(hours());
    hourDiv.attr("class", "hour col-3");
    rowDiv.append(hourDiv);

    var eventDiv = $('<input id="newEvent'+ hours() +'" type="text" data-hour="'+ hours() +'"></div>');
    eventDiv.attr("class", "time-block col-6 "+ eventState);
    rowDiv.append(eventDiv);
    
    var saveDiv = $('<button id="save'+ hours() +'"data-hour="'+ hours() +'"></button>').text("save");
    saveDiv.attr("class", "saveBtn col-3 "+ eventState);
    // saveDiv.attr("class", eventState);
    rowDiv.append(saveDiv);
}

function getBtn() {
    // 
    // event.preventDefault();
    console.log(this);
    console.log(this.id);
    console.log($(this).attr("data-hour"));
}

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

$(document).on("click", ".saveBtn", getBtn);