// Il programma dovrà chiedere all'utente
//     Il numero di chilometri che vuole percorrere
//     l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
// secondo queste regole:
//     il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     va applicato uno sconto del 20% per i minorenni
//     va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// RACCOGLIERE I DATI 
// Numero di km 
const km = parseInt(prompt('Quanti Km devi percorrere?'));
console.log(km);

// Età del passeggero
const age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

// Definiamo il costo al km
const priceKm = 0.21 ;
console.log(priceKm);

// DEFINIRE IL COSTO DEL BIGLIETTO
// Calcoliamo il costo dei Km da percorrere
const totKmPrice = km * priceKm;
console.log(totKmPrice);

// Definiamo il prezzo scontato
let price = totKmPrice ;

if(age < 18 ){
    price = (totKmPrice - ((totKmPrice * 20) / 100));
} else if (age > 65){
    price = (totKmPrice - ((totKmPrice * 40) / 100));
}

console.log(price);

// Arrotondiamo il risultato a 2 decimali 
const ticketPrice =parseFloat(price.toFixed(2)); 
console.log(ticketPrice)

let userMessage = "Il prezzo del tuo biglietto è " + (ticketPrice) + " €";
 
// Stampiamo il risultato 
alert(userMessage);
