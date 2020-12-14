/* Chiedere all’utente:
- il numero di chilometri che vuole percorrere,
- l’età del passeggero.

- calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base
ai km (0.21 € al km):

- sconto del 20% per i minorenni
- sconto del 40% per gli over 65. */

var travelDistance = parseInt(prompt('Quanti Chilometri devi percorrere?')); // Dichiaro variabile, chiedo di inserire i km del viaggio;
var passengerAge = parseInt(prompt('Inserisci l\'età del passeggero')); // Dichiaro variabile, chiedo di inserire l'età del passegero;
var oneKmPrice = 0.21; // Dichiaro variabile con il prezzo di ogni singolo km;
var totalPrice = travelDistance * oneKmPrice; // Calcolo il prezzo del biglietto senza sconto;
var discount = 0; // Dichiaro la variabile sconto, con valore di partenza 0;

document.getElementById('km').innerHTML = 'Devi percorrere:' + travelDistance + 'km ed ';
document.getElementById('age').innerHTML = 'Hai ' + passengerAge + ' anni, quindi ';
document.getElementById('price').innerHTML = 'Pagheresti: ' + totalPrice + ' € ';
document.getElementById('discount').innerHTML = 'Non hai diritto a sconti';

if (passengerAge < 18) {
    discount = (totalPrice * 20 / 100); // Calcolo lo sconto per minorenni;
    totalPrice -= discount;
    document.getElementById('discount').innerHTML = 'Hai diritto ad uno sconto, quindi pagherai: ' + totalPrice + ' €';
} else if (passengerAge >= 65) {
    discount = (totalPrice * 40 / 100); // Calcolo lo sconto per gli over65;
    totalPrice -= discount;
    document.getElementById('discount').innerHTML = 'Hai diritto ad uno sconto, quindi pagherai: ' + totalPrice + ' €';
}