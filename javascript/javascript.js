console.log("let's begin here ...");
console.log("--------------------");
var timeDiv = $('<div id="time-block"></div>').text("let's begin here ...");
var rowDiv = $('<div id="row" class="row"></div>');
$(".jumbotron").append(timeDiv);



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



var key;
var value;
var varBuild;
var timeArray = [];
var eventArray = [];
var storeLength;

function getBtn(time) {
    event.preventDefault();
    varBuildID = "#" + time;
    timeArray.push(time);
    eventArray.push($(varBuildID).val());
    storeData(timeArray, eventArray);
}

function checkStorage() {
    if (localStorage.length === 0) {
        console.log("nope.");
        return false;
    } else {
        console.log("yep.");
        return true;
    }
}

function storeData(key, value) {
    localStorage.setItem("time", key);
    localStorage.setItem("event", value);
}

function clearData() {
    for (let i = 0; i < timeArray.length; i++) {
        var eraseID = "#" + timeArray[i];
        var eraseEvent = "";
        $(eraseID).val(eraseEvent);
    }
    localStorage.clear();
}

function restoreData() {
    eventArray = eventArray.split(",");
    timeArray = timeArray.split(",");
    for (let i = 0; i < timeArray.length; i++) {
        var restoreID = "#" + timeArray[i];
        var restoreEvent = eventArray[i];
        $(restoreID).val(restoreEvent);
    }
}

function getStorage() {
    timeArray = localStorage.getItem("time");
    eventArray = localStorage.getItem("event");
    restoreData();
}

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

if (checkStorage()) {
    storeLength = localStorage.length;
    console.log(storeLength + " there's something there!");
    getStorage();
} else {
    console.log("there's nothing there.");
}

// localStorage.clear();

$(document).on("click", ".saveBtn", function () {
    var getDataTime = $(this).data("time");
    getBtn(getDataTime);
});

$("#clear-calendar").on("click", clearData);