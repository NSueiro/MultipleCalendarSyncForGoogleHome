function SyncCalendarsForGoogleHome() {
    var calendarsWithName = {
        "[The Tag For The Events Of This Calendar]": "the_calendar_i_want_to_duplicate@gmail.com",
    };
    var google_home_email = "the_calendar_that_is_synced_with_google_home@gmail.com";
    var googleHomeCalendar = CalendarApp.getCalendarById(google_home_email);

    var today = new Date();
    var days_to_sync = 8;

    for (var i in calendarsWithName) {
        var calendarToCopy = CalendarApp.getCalendarById(calendarsWithName[i]);
        var name = i;

        for (var j = 0; j < days_to_sync; j++){
            var current_date = new Date();
            current_date.setDate(current_date.getDate() + j);            
            var events = calendarToCopy.getEventsForDay(current_date);

            var old_events = googleHomeCalendar.getEventsForDay(current_date);
            for (var i = 0; i < old_events.length; i++){
                if (old_events[i].getTag("is_cloned")){
                    old_events[i].deleteEvent();
                }
            }

            for (var i = 0; i < events.length; i++){
              var created_event = googleHomeCalendar.createEvent(name + " " + events[i].getTitle(), events[i].getStartTime(), events[i].getEndTime(), {location: events[i].getLocation(), description: events[i].getDescription()});
                created_event.setTag("is_cloned", true);
            }
        }
    }
}
