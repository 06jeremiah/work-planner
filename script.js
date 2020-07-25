//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//variable for locally stored contents of text area/ each hours tasks
//WHEN I scroll down
//THeN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist inside of each row create
console.log("JS Loaded")
$(".save").on("click",function(){
    console.log("Onlcic")
    var btnid =$(this).attr("id");
    var timeblock =btnid.split("-")[0]
    var value = $(`#${timeblock}-input`).val()
    console.log(btnid,timeblock,value)
})