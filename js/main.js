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


/ Task 2
function sumCredit(sc){
    const persent = 0.17;
    const year = 5;
    return Math.round((sc*persent*year));
}
console.log(sumCredit(2000))


