function modulePostRender(control) {
    if(window.location.href.indexOf("post") > -1) {
	    $('#title').val(getWeekArray() + ': ' + $('input[name=times_0]').val());

        $(document).on("click", "input[type=checkbox]", function() {
            $('#title').val(getWeekArray() + ': ' + $('input[name=times_0]').val());
        });

        $(document).on("blur", "input[name=times_0]", function() {
            $('#title').val(getWeekArray() + ': ' + $('input[name=times_0]').val());
        })        
    }
}

function getWeekArray() {
    var weekdays = ['Su', 'Mo', 'Tue', 'Wed', 'Thu', 'Fr', 'Sa'];
    var elem = ($('div[data-alpaca-field-name=weekdays]'))[0].children,
        lday = -1,
        a_week = [],
        a_week_counter = 0;

    for(var i = 0, len = elem.length; i<len; i++) {
        var check = $(elem[i]).find("input"),
            day = parseInt($(check).attr('data-checkbox-value'));

        if($(check).is(':checked')) {
            if(lday === -1) {
                a_week[a_week_counter++] = weekdays[day];
                lday = day;
                continue;
            }
            if((lday + 1) === day || (lday - 6) === day) {
                a_week[a_week_counter] = '-' + weekdays[day];
            } else {
                a_week_counter++;
                a_week[a_week_counter++] = ',' + weekdays[day];
            }
            lday = day;
        }
    };
    return a_week.join("");
}