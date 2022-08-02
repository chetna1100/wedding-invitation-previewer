let clickFloral = document.querySelector("#clickFloral");
let floralDiv = document.querySelector("#floralDiv");

clickFloral.addEventListener("click", changeFloral);
clickGold.addEventListener("click", changeGold);
clickRustic.addEventListener("click", changeRustic);
document.getElementById("defaultOpen").click();

function changeFloral() {
floralDiv.style.backgroundColor = "red";
  goldDiv.style.display = "none";
  rusticDiv.style.display = "none";
  floralDiv.style.display = "block";
  // document.getElementById("floralDiv").style.width = "100%";
  // document.getElementById("floralDiv").style.height = "400px";
  // document.getElementById("floralDiv").style.color = "red";
  //  document.getElementById("floralDiv").style.background = 'url(images/floral-1.png) no-repeat center /300px';
  
document.getElementById("floralDiv").style.background = ' url(images/floral-1.png) top / cover';
//floralDiv.style.backgroundSize='cover';

  //  document.getElementById("floralDiv").innerHTML = `<p class="displayFirstName">Nancy</p>
  //     <p class="displayAnd">and</p>
  //     <p class="displaySecondName">Henry</p>
  //     <p>HAVE THE HONOUR OF ANNOUNCING THEIR MARRIAGE</p>
  //     <p class="displayDate">01 . 012. 2022</p>
  //     <p class="displayTime">3pm</p>
  //     <p class="displayVenue">Banyule Community Centre</p>`;
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

//-------------------First Name
//const showName =document.getElementsByTagName('p')
//const showName =document.querySelector('.display-name')
const inputFirstName= document.getElementById('firstName')
const displayFirstName =document.getElementsByClassName('displayFirstName')
function displayFirstNameValue(){
  for(let i =0;i<3;i++){
    displayFirstName[i].innerHTML=inputFirstName.value
  }
   //displayFirstName[0].innerHTML=inputFirstName.value
   //displayFirstName[1].innerHTML=inputFirstName.value
   //displayFirstName[2].innerHTML=inputFirstName.value
}
inputFirstName.addEventListener('keyup' , displayFirstNameValue)
//-----------Second Name
const inputSecondName= document.getElementById('secondName')
const displaySecondName =document.getElementsByClassName('displaySecondName')
function displaySecondNameValue(){
    displaySecondName[0].innerHTML=inputSecondName.value
    displaySecondName[1].innerHTML=inputSecondName.value
    displaySecondName[2].innerHTML=inputSecondName.value
 }
inputSecondName.addEventListener('keyup' , displaySecondNameValue)
//-----------Date
const inputDate= document.getElementById('dateInput')
const displayDate =document.getElementsByClassName('displayDate')
function displayDateValue(){
    displayDate[0].innerHTML=inputDate.value
    displayDate[1].innerHTML=inputDate.value
    displayDate[2].innerHTML=inputDate.value
 }
 inputDate.addEventListener('keyup' , displayDateValue)
//-----------Time
const inputTime= document.getElementById('timeInput')
const displayTime =document.getElementsByClassName('displayTime')
function displayTimeValue(){
    displayTime[0].innerHTML=inputTime.value
    displayTime[1].innerHTML=inputTime.value
    displayTime[2].innerHTML=inputTime.value
 }
 inputTime.addEventListener('keyup' , displayTimeValue)

 //-----------Venue
const inputVenue= document.getElementById('venueInput')
const displayVenue =document.getElementsByClassName('displayVenue')
function displayVenueValue(){
  displayVenue[0].innerHTML=inputVenue.value
  displayVenue[1].innerHTML=inputVenue.value
  displayVenue[2].innerHTML=inputVenue.value
 }
 inputVenue.addEventListener('keyup' , displayVenueValue)
 




//-------------same preview 
let html = document.getElementById("floralDiv").innerHTML;
document.getElementById("goldDiv").innerHTML = html;
document.getElementById("rusticDiv").innerHTML = html;

//--------------------Reset
let resetBtn = document.querySelector("#resetBtn");
function reset() {
  document.getElementsByClassName("myForm").reset();
}
resetBtn.addEventListener('click' , reset)

/////////-------validateForm

//let y = document.forms["myForm"]["secondName"].value;
// function validateForm() {
//   let x = document.forms["myForm"]["firstName"].value;
//   let y = document.forms["myForm"]["secondName"].value;
//   if (x == "" || y == "") {
//     alert("PLease enter Name");
//     return false;
//   }

 
// }


//=-------------submit
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted!");
});
