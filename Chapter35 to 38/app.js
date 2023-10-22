/*
// Question No 1
function myFunction() {
    const date = new Date();
    console.log(date);
}
myFunction()
// Question No 2
const firstName = prompt('Enter your first name');
const lastName  = prompt('Enter your last name')
function fullName(fName, lName){
    alert(`Welcome to our land ${fName} ${lName}`);
}
fullName(firstName, lastName)
// Question No 3
let num1 = parseFloat(prompt("Enter first number to calculate"));
let num2 = parseFloat(prompt("Enter second number to calculate"));
function myCalculation() {
    const totalSum = num1 + num2;
    return totalSum;

}
var save = myCalculation();
console.log(save);

// Question No 4
function calcul(num1,operator,num2 ) {
   if (operator === '+'){
    return num1 + num2
   }else if(operator === '-'){  
    return num1 - num2
   }else if(operator === '/'){
    return num1 / num2
   }else if(operator === '%'){
    return num1 % num2
   }else{
    alert('Please enter a computed number')
   }
}
let store = calcul(10,'/',3);
console.log(store);

// Question No 5
function  square(number){
    return number * number
}
let save = square(4);
console.log(save);

// Question No 6
function myFacto(num1, num2,num3,num4){
    return num1 * num2 * num3 * num4
}
console.log(myFacto(4,4,4,4));

// Another way to compute the factorial
function myFact2(num1, num2){
    let totalSum = num1 ** num2;
    return totalSum;
}
console.log(myFact2(3,3));

// Question No 7
const num1 = Number(prompt('Enter a starting number'));
const num2 = Number(prompt('Enter a ending number'))
function myCalStartToEnd(start, end){
     if (start < end){
        for(var i = start; i <= end; i++){
            console.log(i);
        }
     }else if( start === end || start > end){
        alert('Please enter a correct number')
     }
}
myCalStartToEnd(num1, num2);

// Question No 8
const num1 = Number(prompt('Enter the base number'));
const num2 = Number(prompt('Enter the perpendicular number'));
function calculateHypotenuse(base, perpen){
    const baseSq = base * base;
    const perpendicSq =perpen * perpen ;
    function calculateSquare(number1, number2){
       let totalNum = number1 + number2;

       return console.log(Math.sqrt(totalNum).toFixed(2)); 
    }
 calculateSquare(baseSq,perpendicSq)
 return
}
const final = calculateHypotenuse(num1,num2);
console.log(final);

// Question No 9
let heightSum = 10;
function areaRecgl(widthVal,heightVal){
    let totalSum = widthVal * heightVal;
    return totalSum;
}
console.log(areaRecgl(20, heightSum));

// Question No 10
let text = 'A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam';
function checkPassedStr(){
   for (var i = 0; i < text.length; i++){
      if(text.slice(i,12)==='palindrome'){
        console.log('Yes it is');
        break
      }
   }
}
checkPassedStr()

// Question No 11
function changingCase(text){
    let str1 = text.slice(0,1);
    let str2 = str1.toUpperCase();
    let str3 = text.slice(1);
    let str4 = str2 + ""+ str3
    return str4
}
console.log(changingCase('the quick brown fox'));

// Question No 12
function longestWordStr(longWord){
  for(var i = 0;i < longWord.length; i++){
    if(longWord.slice(i,i) == 'Development'){
        longWord = 'Development';
        console.log(longWord);
    }
  }
}
longestWordStr('Web Development Tutorials')
*/

// Question No 13
function charCount(str, letter) {
    var letterStr = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            letterStr += 1;
        }
    }
    return letterStr;
}

console.log(charCount('umairahmed', 'a'));
