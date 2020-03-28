console.log("let's begin here ...");
console.log("--------------------");
var timeDiv = $('<div id="time-block"></div>').text("let's begin here ...");
var rowDiv = $('<div id="row" class="row"></div>');
$(".jumbotron").append(timeDiv);

var momentHour = moment().format("h");
var amPm = moment().format("a");

function hours() {
    for (let i = 9; i <= 12; i++) {
        var eventHour = "#" + i;
        if (i < momentHour){
            console.log(typeof(momentHour));
            $(eventHour).attr("class","past");
        } else if (toString(i) == momentHour){
            $(eventHour).attr("class","present");
        } else {$(eventHour).attr("class","future");}
    }
    for (let i = 1; i <= 5; i++) {
        var eventHour = "#" + i;
        if (i < momentHour){
            $(eventHour).attr("class","past");
        } else if (toString(i) === momentHour){
            $(eventHour).attr("class","present");
        } else {$(eventHour).attr("class","future");}
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
            return false;
        } else {
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
        getStorage();
    }

    hours();

    $(document).on("click", ".saveBtn", function () {
        var getDataTime = $(this).data("time");
        getBtn(getDataTime);
    });

    $("#clear-calendar").on("click", clearData);