'use strict';

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//-------
let timeOfcookie = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let parent = document.getElementById('parent');
let tableelemnts = document.createElement('table');
parent.appendChild(tableelemnts);
// tableelemnts.setAttribute('id', 'table-1');

//-------
let locations = [];
// console.log(locations);
function Location(goodname, aavarage, minimum, maximum) {

  this.goodname = goodname;
  this.aavarage = aavarage;
  this.minimum = minimum;
  this.maximum = maximum;
  this.randomNumber1 = [];
  this.gitrandomNumber();
  // this.total=0;
  locations.push(this);

}
// PROTOTYPE
Location.prototype.gitrandomNumber = function () {
  // this.total=0;

  for (let s = 0; s < timeOfcookie.length; s++) {
    this.randomNumber1.push(Math.floor((randomNumber(this.maximum, this.minimum) * this.aavarage)));
  }
}


function showTable() {

  let thelemnts = document.createElement('th');
  tableelemnts.appendChild(thelemnts);
  for (let a = 0; a < timeOfcookie.length; a++) {

    let thelemnts = document.createElement('th');
    tableelemnts.appendChild(thelemnts);
    thelemnts.textContent = timeOfcookie[a];
    // console.log(thelemnts);
  }
  let thelastHeading = document.createElement('th');
  tableelemnts.appendChild(thelastHeading);
  thelastHeading.textContent = 'Daily Location Total';

  //heloo
}
showTable();


// console.log(Seattle);

// let sumone=0;

Location.prototype.render = function () {
  let trelemnts = document.createElement('tr');
  tableelemnts.appendChild(trelemnts);
  let tdelemnts = document.createElement('td');
  trelemnts.appendChild(tdelemnts);
  tdelemnts.textContent = this.goodname;

  let sum = 0;

  // console.log('tota2 ', total);
  for (let i = 0; i < timeOfcookie.length; i++) {
    let tdelemnts = document.createElement('td');
    trelemnts.appendChild(tdelemnts);
    tdelemnts.textContent = this.randomNumber1[i];
    sum += this.randomNumber1[i];

  }

  // console.log('tota3 ', total);
  // sumone+=sum; 

  let last = document.createElement('td');
  trelemnts.appendChild(last);
  last.textContent = sum;
  // console.log(sumone);
  sum = 0;

}

let Seattle = new Location('seattle', 6.3, 23, 65);
  let Tokyo = new Location('Tokyo', 1.2, 3, 24);
  let Dubai = new Location('Dubai', 3.7, 11, 38);
  let paris = new Location('paris', 2.3, 20, 38);
  let lima = new Location('lima', 4.6, 2, 16);

let cookieLocation = document.getElementById('locationsForm');

console.log(cookieLocation);
cookieLocation.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  
  
  let name = event.target.nameOfLocations.value;
  console.log(name);
  let avarage = event.target.avaregeCookei.value;
  console.log('avs', avarage);
  
  let minimum = event.target.minmumCustumer.value;
  let maximum = event.target.maximumCustmer.value;
  
  let newLocation = new Location(name, avarage, minimum, maximum);
  console.log('new location', locations);
  // amro.tex tContent = '';
  // let amro = document.getElementById('locationsForm');
  tableelemnts.textContent = '';
  // tdelemnts=document.createElement('th');
  // tableelemnts.appendChild(tdelemnts);
  console.log('total', total);
  showTable();
  for (let l = 0; l < locations.length; l++) {
    // total=0;
    // totalone=0;
    locations[l].render();
    // totalone=0;
    // total=0;
  }
  footer();
  
  
  
  
  
  
  
  // // amro.removeChild(amro.lastChild);
  // amro.deleteRow(tdelemnts);
  
  
  // newLocation.gitrandomNumber();
  // newLocation.render();
  
  

  // console.log('asdfasdsf');
  // footer();



  // newLocation.render(); 
}
// newLocation.render();

// submitter();



let total = 0;
let totalone = 0;
function footer() {
  total;
  totalone = 0;
  let trelemnts = document.createElement('tr');
  tableelemnts.appendChild(trelemnts);
  let thelemnts = document.createElement('th');
  trelemnts.appendChild(thelemnts);
  thelemnts.textContent = 'Totals';

  for (let f = 0; f < timeOfcookie.length; f++) {
    total = 0;

    for (let m = 0; m < locations.length; m++) {
      total += locations[m].randomNumber1[f];
      totalone += locations[m].randomNumber1[f];
    }

    // console.log(total);
    let tdelemnts = document.createElement('th');
    trelemnts.appendChild(tdelemnts);
    tdelemnts.textContent = total;
    // totalone+=total;  
    total = 0;
  }
  let lastLast = document.createElement('th');
  trelemnts.appendChild(lastLast);
  lastLast.textContent = totalone;
  totalone = 0;
}


for (let l = 0; l < locations.length; l++) {
  locations[l].render();
}
footer();




// console.log(sumone);
// console.log(totalone);


