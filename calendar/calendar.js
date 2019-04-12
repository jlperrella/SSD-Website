function showSeptember(){
    $("#calendar").load("./calendar/september.html"); 
};
function showOctober(){
    $("#calendar").load("./calendar/october.html"); 
};
function showNovember(){
    $("#calendar").load("./calendar/november.html"); 
};
function showDecember(){
    $("#calendar").load("./calendar/december.html"); 
};
function showJanuary(){
    $("#calendar").load("./calendar/january.html"); 
};
function showFebuary(){
    $("#calendar").load("./calendar/febuary.html"); 
};
function showMarch(){
    $("#calendar").load("./calendar/march.html"); 
};
function showApril(){
    $("#calendar").load("./calendar/april.html"); 
};
function showMay(){
    $("#calendar").load("./calendar/may.html"); 
};



$( document ).ready(function() {
    var d = new Date();
    var m = d.getMonth();
    
    if(m == 9) {
        showOctober();
    } else if(m == 10) {
        showNovember();
    } else if(m == 11) {
        showDecember();
    } else if(m == 0) {
        showJanuary();
    } else if(m == 1) {
        showFebuary();
    } else if(m == 2) {
        showMarch();
    } else if(m == 3) {
        showApril();
    } else if(m == 4) {
        showMay();
    } else {
        showSeptember();
    }
    
});

function populateCalendarDetails(className, professor, time, room) {
    var calendar_details = document.getElementById("calendar_details");
    calendar_details.innerHTML = "";
    
    var details_list = document.createElement("ul");
    var li_title = document.createElement("li");
        li_title.appendChild(document.createTextNode("Class: " + className));
    var li_instructor = document.createElement("li");
        li_instructor.appendChild(document.createTextNode("Professor: " + professor));
    var li_time = document.createElement("li");
        li_time.appendChild(document.createTextNode("Time: " + time));
    var li_room = document.createElement("li");
        li_room.appendChild(document.createTextNode("Room: " + room));
    details_list.appendChild(li_title);
    details_list.appendChild(li_instructor);
    details_list.appendChild(li_time);
    details_list.appendChild(li_room);
    calendar_details.appendChild(details_list);
}

$(document).on('click', '.orientation', function() {
    populateCalendarDetails("Orientaion", "Marlene Delanghe", "10:00am", "360");
});
$(document).on('click', '.holiday', function() {
    populateCalendarDetails("Holiday", "-", "-", "-");
});
$(document).on('click', '.flex_day', function() {
    populateCalendarDetails("Flex Day", "-", "-", "-");
});
$(document).on('click', '.WebDesign', function() {
    populateCalendarDetails("Web: Front End", "Michael White", "9:00am", "382");
});
$(document).on('click', '.Java', function() {
    populateCalendarDetails("Intro Java", "Paul Mills", "9:00am", "360");
});
$(document).on('click', '.OOC', function() {
    populateCalendarDetails("Object Oriented C#", "Phil Weier", "9:00am", "382");
});
$(document).on('click', '.Database', function() {
    populateCalendarDetails("Relational Database", "Phil Weier", "9:00am", "382");
});
$(document).on('click', '.SaD', function() {
    populateCalendarDetails("System Design", "Pat McGee", "9:00am", "382");
});
$(document).on('click', '.Angular', function() {
    populateCalendarDetails("Angular", "Pat McGee", "9:00am", "360");
});
$(document).on('click', '.LINQ', function() {
    populateCalendarDetails("LINQ", "Pat McGee", "9:00am", "360");
});
$(document).on('click', '.presentation_skills', function() {
    populateCalendarDetails("Presentaion Skills", "Marlene Delanghe", "10:00am", "360");
});
$(document).on('click', '.project1', function() {
    populateCalendarDetails("Project Phase 1", "Pat McGee", "9:15am", "382");
});
$(document).on('click', '.Javascript', function() {
    populateCalendarDetails("Javascript", "Jason Harrison", "9:00am", "382");
});
$(document).on('click', '.ASPNETMVC', function() {
    populateCalendarDetails("ASP.NET MVC", "Phil Weier", "9:00am", "360");
});
$(document).on('click', '.Android', function() {
    populateCalendarDetails("Intro Android", "Paul Mills", "9:00am", "382");
});
$(document).on('click', '.ASPNETAPI', function() {
    populateCalendarDetails("ASP.NET Web API", "Pat McGee", "9:00am", "360");
});
$(document).on('click', '.PHP', function() {
    populateCalendarDetails("PHP", "Jeff Parker", "9:00am", "382");
});
$(document).on('click', '.Security', function() {
    populateCalendarDetails("Web Security", "Pat McGee", "9:00am", "360");
});
$(document).on('click', '.Laravel', function() {
    populateCalendarDetails("Laravel", "Pat McGee", "9:00am", "360");
});
$(document).on('click', '.MEAN', function() {
    populateCalendarDetails("M.E.A.N", "Medhat Elmasry", "9:00am", "382");
});
$(document).on('click', '.iOS', function() {
    populateCalendarDetails("i0S Development", "Phil Weier", "9:00am", "382");
});
$(document).on('click', '.project2', function() {
    populateCalendarDetails("Project Phase 2", "Pat McGee", "9:15am", "382");
});
$(document).on('click', '.aws', function() {
    populateCalendarDetails("Amazon Web Services", "Pat McGee", "9:00am", "360");
});
$(document).on('click', '.project3', function() {
    populateCalendarDetails("Project Phase 3", "Pat McGee", "9:15am", "382");
});
$(document).on('click', '.Resume', function() {
    populateCalendarDetails("Resume Writing", "Marlene Delanghe", "10:00am", "360");
});
$(document).on('click', '.Interview', function() {
    populateCalendarDetails("Interview Skills", "Marlene Delanghe", "10:00am", "360");
});
$(document).on('click', '.Industry', function() {
    populateCalendarDetails("Industry Project", "Pat McGee", "9:00am", "382");
});