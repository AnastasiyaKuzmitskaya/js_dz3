"use strict";


// Task 1

function getSum(n){
    var sum=0;
    for (let i=0; i<=n; i++){
    sum+=i;
    }
    return sum;
}

console.log(getSum(100));


// Task 2
function sumCredit(sc){
    const persent = 0.17;
    const year = 5;
    return Math.round((sc*persent*year));
}
console.log(sumCredit(2000))



// Task 3
function  trimString(str, valueFrom, valueBy){
    return str.slice(valueFrom, valueBy);
}

console.log(trimString('Обучение языку программирования JavaScript', 5,-10))



// Task 4

function getSumNumbers(num) {      
    let sum = 0;
    for( let digit of `${num}` ){ // прямо тут, сразу превращая n в строку
      sum += +digit;
    }      
    return sum;
  }
  
  console.log( getSumNumbers(2021));



   
  // Task 5

function getSum(a,b) {  
    let sumAB = 0;
    
    if(typeof(a) !== 'number' || typeof(b) !== 'number') return console.log("ЭТо не является числом");
    
    
    if (a === b)  return console.log(`Numbers are equal. Sum is ${a}`);
    
    for (let i=a; i<= b; i++ ){
        sumAB += i;
    }
    
    console.log(sumAB);
    }
    console.log(getSum(5,6))
    


  // Task 6

//1 способ
  
function foo() {
    console.log('foo');
}  
function boo() {
    console.log('boo');
}  
function fooBoo(isTrue, funcOne, funcTwo) {
    if(isTrue){
        funcOne();

    }
    else{
        funcTwo();
    }
}  
fooBoo(true,foo, boo)


//2 способ

/* function foo() {
    console.log('foo');
}  
function boo() {
    console.log('boo');
}  
function fooBoo(isTrue, funcOne, funcTwo) {
    if(isTrue === 'true'){
        return foo();

    }
    else{
        return boo();;
    }
}  
console.log(fooBoo('false')); */