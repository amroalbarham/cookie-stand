'use strict';

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let timeOfcookie = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];


let parent = document.getElementById('parent');
let tableelemnts = document.createElement('table');
parent.appendChild(tableelemnts);


function showTable() {

  let thelemnts = document.createElement('th');
  tableelemnts.appendChild(thelemnts);
  for (let a = 0; a < timeOfcookie.length; a++) {

    let thelemnts = document.createElement('th');
    tableelemnts.appendChild(thelemnts);
    thelemnts.textContent = timeOfcookie[a];
    console.log(thelemnts);
  }
  let thelastHeading = document.createElement('th');
  tableelemnts.appendChild(thelastHeading);
  thelastHeading.textContent = 'Daily Location Total';

//heloo
}
showTable();

let locations = [];
console.log(locations);

function Location(goodname, aavarage, minimum, maximum) {

  this.goodname = goodname;
  this.aavarage = aavarage;
  this.minimum = minimum;
  this.maximum = maximum;
  this.randomNumber1 = [];
  this.gitrandomNumber();
  locations.push(this);


}
Location.prototype.gitrandomNumber = function () {

  for (let s = 0; s < timeOfcookie.length; s++) {
    this.randomNumber1.push(Math.floor((randomNumber(this.maximum, this.minimum) * this.aavarage)));
  }
}



// console.log(Seattle);

// let sumone=0;

Location.prototype.render = function () {


  let trelemnts = document.createElement('tr');
  tableelemnts.appendChild(trelemnts);
  let tdelemnts = document.createElement('td');
  trelemnts.appendChild(tdelemnts);
  tdelemnts.textContent = this.goodname;

  let sum = 0;
 

  for (let i = 0; i < timeOfcookie.length; i++) {
    let tdelemnts = document.createElement('td');
    trelemnts.appendChild(tdelemnts);
    tdelemnts.textContent = this.randomNumber1[i];
    sum += this.randomNumber1[i];
  }
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
for (let l = 0; l < locations.length; l++) {
  locations[l].render();
}
let totalone=0;
let total=0;
let trelemnts=document.createElement('tr');
tableelemnts.appendChild(trelemnts);
let thelemnts=document.createElement('th');
trelemnts.appendChild(thelemnts);
thelemnts.textContent='Totals'; 

for(let f=0;f<timeOfcookie.length;f++){
      for(let m=0;m<locations.length;m++){
        total+=locations[m].randomNumber1[f];
        totalone+=locations[m].randomNumber1[f];
      
        
      }
      console.log(total);
      let tdelemnts=document.createElement('th');
      trelemnts.appendChild(tdelemnts);
      tdelemnts.textContent=total;
      // totalone+=total;  
      total=0;


}
// console.log(sumone);
console.log(totalone);

let lastLast=document.createElement('th');
trelemnts.appendChild(lastLast);
lastLast.textContent=totalone;

// let finalSumrow=0;
// for(let r=0;r<sumone.length;r++){
//   finalSumrow+=sumone[r];}

// let totalfinalcoloum=0;       
// for(let w=0;w<totalone.length;w++){
//   totalfinalcoloum+=totalone[w]};  

// console.log(finalSumrow);
// console.log(totalfinalcoloum);
// let TotalTotal=totalfinalcoloum+finalSumrow;
// console.log(TotalTotal);











// let Seattle = {

//   goodname: 'Seattle',
//   randomNumber1: [],

//   aavarage: 6.3,
//   minimum: 23,
//   maximum: 65,
//   coutmerperhour: 0,


//   gitCoustmer: function () {
//     for (let i = 0; i < timeOfcookie.length; i++) {

//       this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
//       console.log(this.randomNumber1);
//        }},


//   render: function () {


//     let parent = document.getElementById('parent');  
//     let nameOflocation=document.createElement('h3');
//     parent.appendChild(nameOflocation);
//     nameOflocation.textContent=this.goodname;

//     let unelemnt = document.createElement('ul');
//     parent.appendChild(unelemnt);
//     console.log(parent);
//     let sum =0;




//     for (let j = 0; j<timeOfcookie.length; j++) {

//       let lielemnt = document.createElement('li');
//       unelemnt.appendChild(lielemnt);
//       lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
//       console.log(lielemnt.textContent);
//       sum+=this.randomNumber1[j];
//       }

//     let lielemnt=document.createElement('li');
//     lielemnt.textContent ='total '+ sum+' cookeis';
//     unelemnt.appendChild(lielemnt);
//    }
//   };
// Seattle.gitCoustmer();
// console.log(Seattle.randomNumber1);
// console.log('hello dana');
// Seattle.render();


// let Tokyo = {

//   goodname: 'Tokyo',
//   randomNumber1: [],
//   aavarage: 1.2,
//   minimum: 3,
//   maximum: 24,
//   coutmerperhour: 0,


//   gitCoustmer: function () {
//     for (let i = 0; i < timeOfcookie.length; i++) {

//       this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
//       console.log(this.randomNumber1);
//        }},


//   render: function () {

//     let parent = document.getElementById('parent');  
//     let nameOflocation=document.createElement('h3');
//     parent.appendChild(nameOflocation);
//     nameOflocation.textContent=this.goodname;
//     let unelemnt = document.createElement('ul');
//     parent.appendChild(unelemnt);
//     console.log(parent);
//     let sum =0;




//     for (let j = 0; j<timeOfcookie.length; j++) {

//       let lielemnt = document.createElement('li');
//       unelemnt.appendChild(lielemnt);
//       lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
//       console.log(lielemnt.textContent);
//       sum+=this.randomNumber1[j];
//       }


//     let lielemnt=document.createElement('li');
//     lielemnt.textContent ='total '+ sum+' cookeis';
//     unelemnt.appendChild(lielemnt);
//    }
//   };

// Tokyo.gitCoustmer();
// console.log(Tokyo.randomNumber1);
// Tokyo.render();



// let Dubai = {

//   goodname: 'Dubai',
//   randomNumber1: [],
//   aavarage: 3.7,
//   minimum: 11,
//   maximum: 38,
//   coutmerperhour: 0,


//   gitCoustmer: function () {
//     for (let i = 0; i < timeOfcookie.length; i++) {

//       this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
//       console.log(this.randomNumber1);
//        }},


//   render: function () {

//     let parent = document.getElementById('parent');  
//     let nameOflocation=document.createElement('h3');
//     parent.appendChild(nameOflocation);
//     nameOflocation.textContent=this.goodname;
//     let unelemnt = document.createElement('ul');
//     parent.appendChild(unelemnt);
//     console.log(parent);
//     let sum =0;


//     for (let j = 0; j<timeOfcookie.length; j++) {

//       let lielemnt = document.createElement('li');
//       unelemnt.appendChild(lielemnt);
//       lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
//       console.log(lielemnt.textContent);
//       sum+=this.randomNumber1[j];
//       }


//     let lielemnt=document.createElement('li');
//     lielemnt.textContent ='total '+ sum+' cookeis';
//     unelemnt.appendChild(lielemnt);
//    }
//   };

//   Dubai.gitCoustmer();
// console.log(Dubai.randomNumber1);
// Dubai.render();


// let Paris = {

//   goodname: 'Paris',
//   randomNumber1: [],
//   aavarage: 2.3,
//   minimum: 20,
//   maximum: 38,
//   coutmerperhour: 0,


//   gitCoustmer: function () {
//     for (let i = 0; i < timeOfcookie.length; i++) {

//       this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
//       console.log(this.randomNumber1);
//        }},


//   render: function () {

//     let parent = document.getElementById('parent');  
//     let nameOflocation=document.createElement('h3');
//     parent.appendChild(nameOflocation);
//     nameOflocation.textContent=this.goodname;
//     let unelemnt = document.createElement('ul');
//     parent.appendChild(unelemnt);
//     console.log(parent);
//     let sum =0;


//     for (let j = 0; j<timeOfcookie.length; j++) {

//       let lielemnt = document.createElement('li');
//       unelemnt.appendChild(lielemnt);
//       lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
//       console.log(lielemnt.textContent);
//       sum+=this.randomNumber1[j];
//       }


//     let lielemnt=document.createElement('li');
//     lielemnt.textContent ='total '+ sum+' cookeis';
//     unelemnt.appendChild(lielemnt);
//    }
//   };

// Paris.gitCoustmer();
// console.log(Paris.randomNumber1);
// Paris.render();

// let Lima = {

//   goodname: 'Lima',
//   randomNumber1: [],
//   aavarage: 2.3,
//   minimum: 20,
//   maximum: 38,
//   coutmerperhour: 0,


//   gitCoustmer: function () {
//     for (let i = 0; i < timeOfcookie.length; i++) {

//       this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
//       console.log(this.randomNumber1);
//        }},


//   render: function () {

//     let parent = document.getElementById('parent');  
//     let nameOflocation=document.createElement('h3');
//     parent.appendChild(nameOflocation);
//     nameOflocation.textContent=this.goodname;
//     let unelemnt = document.createElement('ul');
//     parent.appendChild(unelemnt);
//     console.log(parent);
//     let sum =0;


//     for (let j = 0; j<timeOfcookie.length; j++) {

//       let lielemnt = document.createElement('li');
//       unelemnt.appendChild(lielemnt);
//       lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
//       console.log(lielemnt.textContent);
//       sum+=this.randomNumber1[j];
//       }


//     let lielemnt=document.createElement('li');
//     lielemnt.textContent ='total '+ sum+' cookeis';
//     unelemnt.appendChild(lielemnt);
//    }
//   };

// Lima.gitCoustmer();
// console.log(Lima.randomNumber1);
// Lima.render();

