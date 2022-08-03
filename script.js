let clickFloral = document.querySelector("#clickFloral");
let floralDiv = document.querySelector("#floralDiv");

clickFloral.addEventListener("click", changeFloral);
clickGold.addEventListener("click", changeGold);
clickRustic.addEventListener("click", changeRustic);
document.getElementById("defaultOpen").click();

function changeFloral() {
  document.getElementById("floralDiv").style.background = ' url(images/floral-1.png) top / cover';
  goldDiv.style.display = "none";
  rusticDiv.style.display = "none";
  floralDiv.style.display = "block";
}

function changeGold() {
    document.getElementById("goldDiv").style.background = 'url(images/ultra-modern.png) top / cover no-repeat #333' ;
  floralDiv.style.display = "none";
  rusticDiv.style.display = "none";
  goldDiv.style.display = "block";
}

function changeRustic() {
    document.getElementById("rusticDiv").style.background = 'url(images/Rustic-wedding-invitation-template-3-731x1024.jpg) top / cover no-repeat';
    rusticDiv.style.display = "block";
    goldDiv.style.display = "none";
    floralDiv.style.display = "none"; 
}

//-------------Same HTML Text Preview 
let html = document.getElementById("floralDiv").innerHTML;
document.getElementById("goldDiv").innerHTML = html;
document.getElementById("rusticDiv").innerHTML = html;


//-----First Name
// Selectors
const inputFirstName = document.getElementById('firstName')
const displayFirstName = document.getElementsByClassName('displayFirstName')
function displayFirstNameValue() {
  for (let i = 0; i < displayFirstName.length; i++) {
    displayFirstName[i].innerHTML = inputFirstName.value
  }
  //Another Solution
  //displayFirstName[0].innerHTML=inputFirstName.value
  //displayFirstName[1].innerHTML=inputFirstName.value
  //displayFirstName[2].innerHTML=inputFirstName.value
}
//Call the events
inputFirstName.addEventListener('keyup', displayFirstNameValue)
//----Second Name
// Selectors
const inputSecondName = document.getElementById('secondName')
const displaySecondName = document.getElementsByClassName('displaySecondName')
//Function
function displaySecondNameValue() {
  for (let i = 0; i < displaySecondName.length; i++) {
    displaySecondName[i].innerHTML=inputSecondName.value
  }
}
//Call the events
inputSecondName.addEventListener('keyup', displaySecondNameValue)
//-----------Date
//Selectors
const inputDate = document.getElementById('dateInput')
const displayDate = document.getElementsByClassName('displayDate')
//Function
function displayDateValue() {
  for (let i = 0; i < displayDate.length; i++) {
    displayDate[i].innerHTML=inputDate.value
  }
}
//Call the events
inputDate.addEventListener('keyup', displayDateValue)
//-----------Time
// Selectors
const inputTime = document.getElementById('timeInput')
const displayTime = document.getElementsByClassName('displayTime')
//Function
function displayTimeValue() {
  for (let i = 0; i < displayTime.length; i++) {
    displayTime[i].innerHTML=inputTime.value
  }
}
//Call the events
inputTime.addEventListener('keyup', displayTimeValue)

//-----Venue
// Selectors
const inputVenue = document.getElementById('venueInput')
const displayVenue = document.getElementsByClassName('displayVenue')
//Function
function displayVenueValue() {
  for (let i = 0; i < displayVenue.length; i++) {
    displayVenue[i].innerHTML=inputVenue.value
  }
}
//Call the events
inputVenue.addEventListener('keyup', displayVenueValue)


//----Reset
let resetBtn = document.querySelector("#resetBtn");
//Function
function reset() {
  document.getElementsByClassName("myForm").reset();
}
//Call the events
resetBtn.addEventListener('click', reset)

//----validateForm

// let y = document.forms["myForm"]["secondName"].value;
// function validateForm() {
//   let x = document.forms["myForm"]["firstName"].value;
//   let y = document.forms["myForm"]["secondName"].value;
//   if (x == "" || y == "") {
//     alert("Please fill in this field");
//     return false;
//   }
// }

function validateForm() {
  var a = document.forms["register"]["firstname"].value;
  var b = document.forms["register"]["lastname"].value;
  var c = document.forms["register"]["email"].value;
  var d = document.forms["register"]["email2"].value;
  if (a == null || a == "" || b == null || b == "" || c == null || c == ""|| d == null || d == "") {
      $(".form_error").show();
      $('html,body').animate({
         scrollTop: $(".form_error").offset().top - 180 
      });


      var e = document.forms["register"]["contactnum"].value;
      var f = document.forms["register"]["mobnum"].value;
      var g = document.forms["register"]["postcode"].value;
      if (e == null || e == "" || f == null || f == "" || g == null || g == "") {
          $(".form_error").show();
          $('html,body').animate({
               scrollTop: $(".form_error").offset().top - 180 
          });


          var h = document.forms["register"]["compname"].value;
          var i = document.forms["register"]["compreg"].value;
          if (h == null || h == "" || i == null || i == "") {
              $(".form_error").show();
              $('html,body').animate({
                  scrollTop: $(".form_error").offset().top - 180 
              });

              return false;
          }   
      }
  }
}


//=-------------submit
let form = document.getElementsByTagName("form")[0];//index [0] form
//let form = document.getElementById("myForm");
//let form = document.getElementsByClassName("firstForm")[0];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Form Submitted!");
// });

/*Another solution */
function submitForm (e) {
  e.preventDefault();
  alert("Form Submitted!");
};
//Call the events
form.addEventListener("submit", submitForm )

