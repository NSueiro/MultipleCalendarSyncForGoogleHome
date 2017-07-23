# Overview
Syncs multiple Google Calendars in an account's default calendar. This serves as a workaround to get Google Home working with multiple calendars.

Credits to @prashantkhurana. This proyect is based on his, which can be found in https://github.com/prashantkhurana/GSuite_Calendar_To_Personal

## General considerations.

It makes a copy of each calendar entry with the title and start and end times, location and description. Guests are not brought over beacause we don't want to duplicate the events for them. This workaround is just for us.

It also adds a user customizable name to each calendar. So, yes you cannot say "hey Google what's on Mark's calendar" but when you ask Google what's on your calendar it will respond with "Mark - pick up Amanda from School. Julia - Call mom".

The main differences between @prashantkhurana script and mine are:
1. This script syncs any ammount of days (defined by the user) instead of one day
2. It is """"smart"""" ("smart" as it can run multiple times and wont duplicate the same event over and over again)
3. It can syncs added events as well as deleted events.
4. Extra: i removed the email notification as i didn't find it useful for me. But that's just a personal preference and can be added again if wanted. 

## Usage

This script has to run on the account that is synced with the Google Home. It is required that all the calendars you wish to use have to be shared with this account.

1. To share your calendars with this account, follow the instructions over [here](https://support.google.com/calendar/answer/37082). Provide "Make changes to events" permission. This is required to create events.
2. The next step is to go to the [Google Apps Script website](https://script.google.com/intro). Make sure you are logged in with the account that is liked to the Google Home.
3. Copy the contents of SyncCalendarsForGoogleHome.gs and paste them over in the editor.
4. Adjust the calendarsWithName variable with appropriate names and email addresses. Make sure the calendars of these email addresses are shared with the account you are using to write the script. An example of the variable is: 
```var calendarsWithName = { "[Tag1]": "work@work.com", "[Tag2]": "school@school.com", "[Tag3]" : "mark@gmail.com" };```
5. If you don't wish to use a tag for the calendar, you can leave it blank like this: 
```var calendarsWithName = { "": "work@work.com",};`
6. Change `google_home_email` variable to your google home email address.
7. Change `days_to_sync`variable to the ammount of days you want to be synced at a time. I find 8 to be useful for me as I don't need to plan that ahead and I often ask about the evnts in the upcoming week to my Google Home.
8. Click on the little clock icon and add a trigger and add a time based trigger for the script to run. I run it once every hour to keep everything synced as my calendar changes quite a bit throughout a day, but not as much for a higher refresh date. But choose whatever you like.
9. Provide all permissions the script needs. It should require only permissions to Manage your calendar. This is for it to read and create the calendar events.
10. Enjoy :) 
