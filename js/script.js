/**
* Simon Says
*/

var numbers = [];
var userNumbers = [];
var checkedNumbers = [];
var quantità = 5;

// Creare arrey di 5 numeri casuali
while(numbers.length < quantità) {
    var number = randNumb (1, 100);
    if(!numbers.includes(number)) {
        numbers.push(number);
    }  
};
//console.log(numbers);

// Output numeri da memorizzare
alert("I numeri da memorizzare sono: " + numbers);

// Chiedere di inserire i numeri memorizzati dopo 30s
setTimeout(function(){
    while(userNumbers.length < quantità) {
        var userNumber = parseInt( prompt("Inserisci il numero " + (userNumbers.length + 1) + " di " + quantità) );
        
        //Validazione
        while(userNumber < 0 || userNumber > 100 || isNaN(userNumber)) {
            var userNumber = parseInt( prompt("Valore non valido.\nInserisci il numero " + (userNumbers.length + 1) + " di " + quantità) );
        }
        while(userNumbers.includes(userNumber)) {
            var userNumber = parseInt( prompt("Numero già inserito.\nInserisci il numero " + (userNumbers.length + 1) + " di " + quantità) )
        }

        userNumbers.push(userNumber);
    }
    //console.log(userNumbers);

    //Controllo numeri indovinati
    for (var i = 0; i < userNumbers.length; i++) {
        if( numbers.includes(userNumbers[i]) ) {
            checkedNumbers.push(userNumbers[i]);
        }
        
    }

    //Output
    console.log("Hai indovinato " + checkedNumbers.length + " numeri su " + numbers.length);
    console.log("I numeri indovinati sono: " + checkedNumbers);
}, 30000)



/**
* FUNCIONS
*/

function randNumb (min, max) {
    return Math.floor( Math.random() * (max - min) + min ) + 1;
};