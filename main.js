const reader = require('readline-sync');
const utils = require('./myUtils');

const a = reader.questionInt("Please insert a positive number = ");
const b = reader.questionInt("Please insert a positive number = ");

function primeNums(a, b) {

  if(a > 0 && b > 0){
    let primeNums = [];

    for(let i = a; i <= b; i++){
      if(utils.isPrime(i)){
        primeNums.push(i)
      }
    }

    if(primeNums.length){
      return primeNums;
    }else{
      return "there are no prime numbers";
    }
  }else{
    return "both numbers should be positive";
  }
}



let elems = primeNums(a,b);
utils.printPrimes(elems);