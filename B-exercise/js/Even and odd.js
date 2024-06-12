/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */




//Funzione pari
function Even(element) {
    let EventResult = element % 2 ===0 ? 'You Win':'You Lose';
    return EventResult;
    
}

//Funzione dispari
function Odd(element) {
  let OddResult = element % 2 !== 0 ? "You Win" : "You Lose";
  return OddResult;
}

//Funzione genera numero da 1 a 5
function RandomNumber(min,max) {
    let RandomNum =Math.floor(Math.random()* (max - min + 1)+ min);
    return RandomNum;
}


