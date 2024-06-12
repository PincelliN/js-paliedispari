/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



//variabile bottone
const Button=document.querySelector("button");

//Evento al click
Button.addEventListener("click",function () {

    //variabile pari o dispari
    let EvenorOdd = displayRadioValue();
    console.log(EvenorOdd);
    //variabile Numero Utente
    let UserNumber =document.getElementById("number").value;
    console.log(UserNumber);
    //variabile Numero Pc
    let PcNumber=RandomNumber(1,5);
    console.log(PcNumber);
    //variabile somma
    let ResultNumber = Somma(UserNumber,PcNumber);


    if (EvenorOdd ==="Pari") {
        let FinalResult = Even(ResultNumber);
        console.log(FinalResult);
        document.getElementById("result").innerHTML=FinalResult;
    }else{
        let FinalResult=Odd(ResultNumber);
        console.log(FinalResult);
         document.getElementById("result").innerHTML = FinalResult;
    }
    
    
})


//Funzione somma
function Somma(num1,num2) {
    return  parseInt(num1) + parseInt(num2);
}

//Funzione pari
function Even(element) {
    return  element % 2 ===0 ? 'You Win':'You Lose';
    
}

//Funzione dispari
function Odd(element) {
  return  element % 2 !== 0 ? "You Win" : "You Lose";
}

//Funzione genera numero da 1 a 5
function RandomNumber(min,max) {
   
    return  Math.floor(Math.random()* (max - min + 1)+ min);
}


//estrazione del value del radio
function displayRadioValue() {
  var EvenOdd = document.getElementsByName("evenorodd");

      let Choise = EvenOdd[0].checked ? 'Pari':'Dispari';

  return Choise
}