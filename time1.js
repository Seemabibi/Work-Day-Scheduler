var options = {
  starHour: 9,
  endHour: 22,
}
function updateTimeslots() {

    var currentHour = moment().hour();

    $('.time-block').each(function (index, element) {
        var hour = ¢(element).attr('data-hour');

        if (hour < currentHour) {
            $(element).find('description'.addClass('past');
                }
    }

}