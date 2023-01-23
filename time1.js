var options = {
  starHour: 9,
  endHour: 17,
}

// funtion to save the informaton entered to local storage 
function newTimeslots() {

    var currentHour = moment().hour();

    $('.time-block').each(function (index, element) {
        var hour = ¢(element).attr('id');

        if (hour < currentHour) {
            $(element).find('description'.addClass('past');
        }
        else if (hour ==currentHour) {
            $(element).find('description').addClass('present');
            $(element).find('description').addClass('past');
        }
        else {
            $(element).find('description').addClass('future');
            $(element).find('description').addClass('present');
            $(element).find('description').addClass('past');
    }

    });
}

//create for loop to go through and creates all elements for the UI

for (var hour = times.startHour; hour <= times.endHour; hour++) {
    var storedItem = localStorage.getItem(hour);
    var timeSlot = $("<div>").addClass("row time-block"); 
    timeSlot.attr("data-hour", hour);
    var timeHour = $("<div>")
      .addClass("col-sm-2 hour")
      .text(moment(hour, "h").format("h A"));
    var outerBox = $("<div>").addClass("col-sm-8 row");
    var enterText = $("<textarea>")
      .addClass("col-sm-12 description")
      .val(storedItem);
    var buttonContainer = $("<div>").addClass(
      "col-sm-2 btn btn-primary saveBtn d-flex align-items-center justify-content-center"
    );
    buttonContainer.on("click", savePlan);
    var button = $("<button>").addClass("fas fa-save");

newTimeslots();

function onSaveTask (e) {
    console.log(e.target);

    var hour = $(e.target).parent[].parent[].find('.description').val();
    var task = $(e.target).parent[].parent[].attr('id');

    localStorage.setItem(hour,task);
    console.log(task,hour);

}

// function generateTimeSlots () {
    // for (var hour = 10; hour <= 17; hour++) }

// var savedTask = localStorage.getItem(hour);
function savePlan(e) {
    var textEntry = $(e.target).parent().find(".description").val(); 
    var hour = $(e.target).parent().attr("data-hour");
  
    //stores text entry to local storage under the key of specific hour 
    localStorage.setItem(hour, textEntry);
  
  

// }
// Load in the timeslots 

$('#10 .description').val(localStorage.getItem)("10")
$('#11 .description').val(localStorage.getItem)("11")
$('#12 .description').val(localStorage.getItem)("12")
$('#13 .description').val(localStorage.getItem)("13")
$('#14 .description').val(localStorage.getItem)("14")
$('#15 .description').val(localStorage.getItem)("15")
$('#15 .description').val(localStorage.getItem)("16")
$('#15 .description').val(localStorage.getItem)("17")

function init () {
    $('.lead').text(today.format("MMM Do, YYYY"));

    $('container').on('click', onSave);

    setInterval(newTime, 10000);
}


 generateTimeslots (){
    for (var hour=10; hour <= 17; hour++){
        // load the task from local storage
        var savedTask = localStorage.getItem(hour);
    }
}
