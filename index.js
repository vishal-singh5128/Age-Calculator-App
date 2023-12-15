
function invalidYear(){
  /*
  $(".today-year").hide();
  $(".today-month").hide();
  $(".today-day").hide();
  */
if( birthYear > currentYear)
{   
  error=true
  $(".today-year").html("Must be in a Past");
  $(".today-year").show();
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
}
else {error=false
  $(".today-year").hide();}
}

function invalidMonth(){
 
  if (( birthMonth < 0 ) || (birthMonth > 12)){
    error=true  
    $(".today-month").html("Must be a valid Month");
    $(".today-month").show();
    $(".today").addClass("warning")
    $("input").css("border-color", "red");
  }
  else {
    $(".today-month").hide();
    error=false}
}

function invalidDate(){
  
  if (( birthDate > 31) || (birthDate < 0)){
      error=true
    $(".today-day").html("Must be a valid Date");
    $(".today-day").show();
    $(".today").addClass("warning")
    $("input").css("border-color", "red");
  }
    else {
    error=false
    $(".today-day").hide();}
}



let calendarDate = new Date()
let currentYear = calendarDate.getFullYear()

let error
let birthDate = 0
let birthMonth= 0
let birthYear=0

$(".icon-arrow").click(function(){
birthMonth=$(".month").val()
birthYear=$(".year").val()
birthDate=$(".date").val()
console.log(birthYear)


var userDate = `${birthYear}-${birthMonth}-${birthDate}`
let dateOfBirth = new Date(userDate)

console.log("dateOfBirth " + dateOfBirth)
console.log("birthDate.length "+birthDate.length)

if ((birthDate.length==0) && (birthMonth.length==0) && (birthYear.length==0)) {
  error=true
  $(".today-year").show()
  $(".today-month").show()
  $(".today-day").show()
  $(".today-day").html("This field is required")
  $(".today-month").html("This field is required")
  $(".today-year").html("This field is required")  
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
}
/*

*/
else if ((birthDate.length==0)){
  $(".today-year").hide()
  $(".today-month").hide()
  $(".today-day").hide()
  $(".today-day").html("This field is required")
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
  $(".today-day").show()
  error=true
  }   



else if ((birthMonth.length==0)){
  error=true
  $(".today-year").hide()
  $(".today-month").hide()
  $(".today-day").hide()
  $(".today-month").html("This field is required")
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
  $(".today-month").show()
  }
  
  
  
else if ((birthYear.length==0)){
  error=true
  $(".today-year").hide()
  $(".today-month").hide()
  $(".today-day").hide()
  $(".today-year").html("This field is required")
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
  $(".today-year").show()
  }    

else {error=false}

if (error==false){
  $(".today-year").hide()
  $(".today-month").hide()
  $(".today-day").hide()
  $(".today").removeClass("warning")
  $("input").css("border-color", "black");
  
// invalidYear()

if( birthYear > currentYear)
{   
  error=true
  $(".today-year").html("Must be in a Past");
  $(".today-year").show();
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
}

  
   
//  invalidMonth()

else if (( birthMonth < 0 ) || (birthMonth > 12)){
  $(".today-year").hide();
  error=true  
  $(".today-month").html("Must be a valid Month");
  $(".today-month").show();
  $(".today").addClass("warning")
  $("input").css("border-color", "red");
}



//  invalidDate()
else if (( birthDate > 31) || (birthDate < 0)){
  $(".today-year").hide();
  $(".today-month").hide();
  error=true
$(".today-day").html("Must be a valid Date");
$(".today-day").show();
$(".today").addClass("warning")
$("input").css("border-color", "red");
}
else {
error=false
$(".today-day").hide();}  
  

if (error==false){
$(".today-day").hide();
$(".today-month").hide();
$(".today-year").hide();
  
console.log("dateOfBirth is a valid date.");
}
}

let daysDifference
let monthsDifference
let yearsDifference

let timeDifference = calendarDate - dateOfBirth
let millisecondsInADay = 1000 * 60 * 60 * 24;

daysDifference = timeDifference / millisecondsInADay;
yearsDifference = daysDifference / 365 

//parseFloat(number.toFixed(2))

let yearsDifferenceRounded = yearsDifference - Math.floor(yearsDifference)
yearsDifferenceRounded = (parseFloat(yearsDifferenceRounded).toFixed(2))

monthsDifference = yearsDifferenceRounded*12
let monthsDifferenceRounded = monthsDifference - Math.floor(monthsDifference)
monthsDifferenceRounded = (parseFloat(monthsDifferenceRounded).toFixed(2))

daysDifference = monthsDifferenceRounded * 31 

//console.log("timeDifference "+timeDifference)
/*
console.log("yearsDifferenceRounded "+ yearsDifferenceRounded)
console.log("monthDifference "+ monthsDifference)
console.log("monthDifferenceRounded "+ monthsDifferenceRounded)
console.log("yearsFloor "+ Math.floor(yearsDifference))

console.log("daysDifference "+daysDifference)
console.log("yearsDifference "+yearsDifference)
*/
if (error==false){
$("#years").html(Math.floor(yearsDifference));
$("#months").html(Math.floor(monthsDifference));
$("#days").html(Math.floor(daysDifference));
}
/*
console.log("dateOfBirth.getDay() "+isNaN(dateOfBirth.getDay()))
console.log("dateOfBirth.getMonth() "+isNaN(dateOfBirth.getMonth()))
console.log("dateOfBirth.getFullYear() "+isNaN(dateOfBirth.getFullYear()))*/
})

console.log("currentYear "+currentYear)
console.log("birthYear "+birthYear)



