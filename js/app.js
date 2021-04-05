'use strict';

function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let timeOfcookie = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {

  goodname: 'Seattle',
  randomNumber1: [],
  
  aavarage: 6.3,
  minimum: 23,
  maximum: 65,
  coutmerperhour: 0,


  gitCoustmer: function () {
    for (let i = 0; i < timeOfcookie.length; i++) {

      this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
      console.log(this.randomNumber1);
       }},


  render: function () {
 

    let parent = document.getElementById('parent');  
    let nameOflocation=document.createElement('h3');
    parent.appendChild(nameOflocation);
    nameOflocation.textContent=this.goodname;
    
    let unelemnt = document.createElement('ul');
    parent.appendChild(unelemnt);
    console.log(parent);
    let sum =0;




    for (let j = 0; j<timeOfcookie.length; j++) {

      let lielemnt = document.createElement('li');
      unelemnt.appendChild(lielemnt);
      lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
      console.log(lielemnt.textContent);
      sum+=this.randomNumber1[j];
      }

    let lielemnt=document.createElement('li');
    lielemnt.textContent ='total '+ sum+' cookeis';
    unelemnt.appendChild(lielemnt);
   }
  };
Seattle.gitCoustmer();
console.log(Seattle.randomNumber1);
console.log('hello dana');
Seattle.render();


let Tokyo = {

  goodname: 'Tokyo',
  randomNumber1: [],
  aavarage: 1.2,
  minimum: 3,
  maximum: 24,
  coutmerperhour: 0,


  gitCoustmer: function () {
    for (let i = 0; i < timeOfcookie.length; i++) {

      this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
      console.log(this.randomNumber1);
       }},

    
  render: function () {

    let parent = document.getElementById('parent');  
    let nameOflocation=document.createElement('h3');
    parent.appendChild(nameOflocation);
    nameOflocation.textContent=this.goodname;
    let unelemnt = document.createElement('ul');
    parent.appendChild(unelemnt);
    console.log(parent);
    let sum =0;



   
    for (let j = 0; j<timeOfcookie.length; j++) {

      let lielemnt = document.createElement('li');
      unelemnt.appendChild(lielemnt);
      lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
      console.log(lielemnt.textContent);
      sum+=this.randomNumber1[j];
      }

 
    let lielemnt=document.createElement('li');
    lielemnt.textContent ='total '+ sum+' cookeis';
    unelemnt.appendChild(lielemnt);
   }
  };

Tokyo.gitCoustmer();
console.log(Tokyo.randomNumber1);
Tokyo.render();



let Dubai = {

  goodname: 'Dubai',
  randomNumber1: [],
  aavarage: 3.7,
  minimum: 11,
  maximum: 38,
  coutmerperhour: 0,


  gitCoustmer: function () {
    for (let i = 0; i < timeOfcookie.length; i++) {

      this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
      console.log(this.randomNumber1);
       }},


  render: function () {
    
    let parent = document.getElementById('parent');  
    let nameOflocation=document.createElement('h3');
    parent.appendChild(nameOflocation);
    nameOflocation.textContent=this.goodname;
    let unelemnt = document.createElement('ul');
    parent.appendChild(unelemnt);
    console.log(parent);
    let sum =0;

    
    for (let j = 0; j<timeOfcookie.length; j++) {

      let lielemnt = document.createElement('li');
      unelemnt.appendChild(lielemnt);
      lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
      console.log(lielemnt.textContent);
      sum+=this.randomNumber1[j];
      }


    let lielemnt=document.createElement('li');
    lielemnt.textContent ='total '+ sum+' cookeis';
    unelemnt.appendChild(lielemnt);
   }
  };

  Dubai.gitCoustmer();
console.log(Dubai.randomNumber1);
Dubai.render();


let Paris = {

  goodname: 'Paris',
  randomNumber1: [],
  aavarage: 2.3,
  minimum: 20,
  maximum: 38,
  coutmerperhour: 0,


  gitCoustmer: function () {
    for (let i = 0; i < timeOfcookie.length; i++) {

      this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
      console.log(this.randomNumber1);
       }},


  render: function () {
   
    let parent = document.getElementById('parent');  
    let nameOflocation=document.createElement('h3');
    parent.appendChild(nameOflocation);
    nameOflocation.textContent=this.goodname;
    let unelemnt = document.createElement('ul');
    parent.appendChild(unelemnt);
    console.log(parent);
    let sum =0;

    
    for (let j = 0; j<timeOfcookie.length; j++) {

      let lielemnt = document.createElement('li');
      unelemnt.appendChild(lielemnt);
      lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
      console.log(lielemnt.textContent);
      sum+=this.randomNumber1[j];
      }


    let lielemnt=document.createElement('li');
    lielemnt.textContent ='total '+ sum+' cookeis';
    unelemnt.appendChild(lielemnt);
   }
  };

Paris.gitCoustmer();
console.log(Paris.randomNumber1);
Paris.render();

let Lima = {

  goodname: 'Lima',
  randomNumber1: [],
  aavarage: 2.3,
  minimum: 20,
  maximum: 38,
  coutmerperhour: 0,


  gitCoustmer: function () {
    for (let i = 0; i < timeOfcookie.length; i++) {

      this.randomNumber1.push(Math.floor(randomNumber(this.maximum, this.minimum) * this.aavarage));
      console.log(this.randomNumber1);
       }},


  render: function () {
    
    let parent = document.getElementById('parent');  
    let nameOflocation=document.createElement('h3');
    parent.appendChild(nameOflocation);
    nameOflocation.textContent=this.goodname;
    let unelemnt = document.createElement('ul');
    parent.appendChild(unelemnt);
    console.log(parent);
    let sum =0;

   
    for (let j = 0; j<timeOfcookie.length; j++) {

      let lielemnt = document.createElement('li');
      unelemnt.appendChild(lielemnt);
      lielemnt.textContent = timeOfcookie[j] + ' : ' + this.randomNumber1[j] +  ' cookies';
      console.log(lielemnt.textContent);
      sum+=this.randomNumber1[j];
      }


    let lielemnt=document.createElement('li');
    lielemnt.textContent ='total '+ sum+' cookeis';
    unelemnt.appendChild(lielemnt);
   }
  };

Lima.gitCoustmer();
console.log(Lima.randomNumber1);
Lima.render();
console.log(Lima.randomNumber1);
