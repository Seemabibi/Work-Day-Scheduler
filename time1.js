var options = {
  starHour: 9,
  endHour: 15,
}
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
newTimeslots();

function onSaveTask (e) {
    console.log(e.target);

    var hour = $(e.target).parent[].parent[].find('.description').val();
    var task = $(e.target).parent[].parent[].attr('id');

    localStorage.setItem(hour,task);
    console.log(task,hour);

}

// function generateTimeSlots () {
    // for (var hour = 10; hour <= 15; hour++) }

// var savedTask = localStorage.getItem(hour);

// }
// Load in the timeslots 

$('#10 .description').val(localStorage.getItem)("10")
$('#11 .description').val(localStorage.getItem)("11")
$('#12 .description').val(localStorage.getItem)("12")
$('#13 .description').val(localStorage.getItem)("13")
$('#14 .description').val(localStorage.getItem)("14")
$('#15 .description').val(localStorage.getItem)("15")

function init () {
    $('.lead').text(today.format("MMM Do, YYYY"));

    $('container').on('click', onSave);

    setInterval(newTime, 10000);
}


 generateTimeslots (){
    for (var hour=10; hour <= 15; hour++){
        // load the task from local storage
        var savedTask = localStorage.getItem(hour);
    }
}



