import readlineSync from 'readline-sync';
//import * as _ from 'lodash'

//import {random} from "lodash";
//import * as lodash from 'lodash';

console.log ('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
console.log('Answer "yes" if the number is even, otherwise answer "no".')

/**
 * @return {number}
 */
function GuessNum () {
  let wrong = false;
  let randomNum = 0;
  let a ='' ;
  let b ='';

  for ( let i = 0; i < 3 && wrong===false; i=i+1) {
    randomNum = getRandomInt(100)
    console.log('Question : ' + randomNum);
    let YourAnswer = readlineSync.keyInYN('Your answer')
    console.log (YourAnswer);
    wrong = YourAnswer === Boolean(randomNum % 2);
    if (YourAnswer === true) {
      a = 'yes';
      b = 'no'
    } else {
      a = 'no';
      b = 'yes';
    }
    ;

    if (wrong === false) {
      console.log('Correct!')
    } else {
    console.log(a +' is wrong answer ;(. Correct answer was '+ b + '\n' + 'Lets try again , ' + userName + '!');
  }

    if ( i === 2 && wrong === false) {
      console.log ('Congratulation!')
    }
    }

}

//let YourAnswer = readlineSync.keyInYN ('Your answer') ;
//    if (YourAnswer%2===){

//    }


  //}
//}


export {userName, getRandomInt,GuessNum};