/**
* Simon Says
*/

var numbers = [];
var userNumbers = [];
var quantità = 5;

// Creare arrey di 5 numeri casuali
while(numbers.length < quantità) {
    var number = randNumb (1, 100);
    if(!numbers.includes(number)) {
        numbers.push(number);
    }  
};
console.log(numbers);

// Output numeri da memorizzare
alert("I numeri da memorizzare sono: " + numbers);

// Chiedere di inserire i numeri memorizzati
setTimeout(function(){
    while(userNumbers.length < quantità) {
        var userNumber = parseInt( prompt("Inserisci il numero " + (userNumbers.length + 1) + " di " + quantità) );
        userNumbers.push(userNumber);
    }
    console.log(userNumbers);
}, 30000)





/**
* FUNCIONS
*/

function randNumb (min, max) {
    return Math.floor( Math.random() * (max - min) + min ) + 1;
};