
// Question No 1
let currentDate = new Date();
document.write(currentDate);

// Question No 2
let currentMonth1 = new Date();
let months1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let findMonth = currentMonth1.getMonth();
document.write(`<br><br>Current month:${months1[findMonth]}`);

// Question No 3
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let date = new Date();
let finddays = date.getDay();
let first3Letters = days[finddays].slice(0,3);
console.log(first3Letters);

// Question No 4
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dates = new Date();
let funDayFind = dates.getDay();
if (days[funDayFind] === "Saturday" || days[funDayFind] === "Sunday"){
    alert("It's Fun day");
}else{
    alert(`Today is ${days[funDayFind]}`)
}

// Question No 5
let date1 = new Date();
let checkDates = date1.getDate();
if (checkDates < 16) {
    console.log(`First fifteen days of the month`);
}else {
    console.log(`Last days of the month`);
}

// Question No 6
let currentDateShow = new Date();
let checkPastMilliSec = currentDateShow.getTime();
let checkPastMinutes = checkPastMilliSec / (1000 * 60 * 60);
console.log(`Curent Date: ${currentDateShow}`);
console.log(`Elapsed milliseconds since January 1, 1970: ${checkPastMilliSec}`);
console.log(`Elapsed minutes since January 1, 1970: ${checkPastMinutes}`);


// Question No 7
let dates2 = new Date();
let hrs = dates2.getHours();
//let min = dates2.getMinutes();
//let sec = dates2.getSeconds();
if (hrs < 12) {
    console.log("It's AM");
}else{
    console.log(`It's PM`);
}

// Question No 8
let dates3 = new Date('Dec 31 2020');
console.log(dates3);

// Question No 9
let ramadanDays = new Date('June 18, 2015');
let dates4 = new Date();
let findRestDays = dates4 - ramadanDays;
let calcToFindRestDays =Math.floor(findRestDays / (1000 * 60 * 60 * 24));
console.log(`${calcToFindRestDays} days have passed since 1st Ramadan, 2015`);


// Question No 10
let currentdate = new Date('Sat Dec 05 2015');
let seconds = currentdate.getSeconds();
let elapsedSec = ((currentdate - seconds) / (1000 * 60))
console.log(`On reference date ${currentdate}, ${elapsedSec} seconds had passed since beginning of 2015`);


// Question No 11
 const curDate = new Date();
 console.log(curDate);
 const hours = curDate.setHours(17);
 console.log(`1 hour ago,it was ${curDate}`);

// Question No 12
let dates5 = new Date();
console.log(`current date:${dates5}`);
let yearsBack = dates5.setFullYear(1923);
console.log(`100 years back:it was ${dates5}`);

// Question No 13
let userAge = Number(prompt("Enter your current age to get your birthday"));
let dates6 = new Date();
let checkBirthDay = dates6.getFullYear() - userAge;
document.write(`<br><br>Your age is ${userAge} <br>Your birth year is ${checkBirthDay}`);

// Question No 14
let customerName = "ABC Customer";
let dates7 = new Date();
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let currentMonth = dates7.getMonth();
let checkCurMonth = months[currentMonth];
let units = 410;
let chargesPerUnit = 16;
let latePaymentCharges = 350;
let dueDate = new Date('October 13, 2023');
function myElectricBill() { 
if (checkCurMonth === months[9] && dates7 <= dates7.setDate(14)){
    let total = units * chargesPerUnit;
    let grossTotal = total + latePaymentCharges;
    document.write(`<br><br><h2>K-Electric Bill</h2>
    Customer Name: <b>${customerName}</b>
    <br>Month:<b> ${checkCurMonth}</b>
    <br>Number of units: <b>${units}</b>
    <br>Charges per unit: <b>${chargesPerUnit}</b><br>
    <br>Net Amount Payable (Within Due Date):<b> ${total}</b>
    <br>Late payment surcharge :<b> ${latePaymentCharges}</b><br>
    Gross Amount Payable (after Due Date):<b> ${grossTotal}</b>`)
}
}

myElectricBill()