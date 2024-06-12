//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


// prima variabile bottone
const Button= document.querySelector("button");


//evento 
 Button.addEventListener("click",function() {
    
// variabile ottenuta attraverso la value input 
    let Name = document.querySelector("input").value;
 
    console.log(Name);
// variabile contenente la stinga capovolta ottenuta attraversola funzione Reverse
    let Rerversename = Reverse(Name);

console.log(Rerversename);
//variabile Risposta ottenuta atraverso la funzione paragone
    let Risposta = Paragone(Name,Rerversename);

 console.log(Risposta);

    document.querySelector("div").innerText = Risposta;
 })
















// funzione di Reverse
function Reverse(item) {
/* percorso
Split = suddivide la sringa in caratteri e trasforma ogniuno di essi in stringhe
Reverse = ribalta l'ordine dei caratteri del array 
Join= riconverte i singoli caratteri in un unica stringa*/
    let RerverseItem = item.split("").reverse().join("");



    
    return RerverseItem;
}

// funzione x chiedere se 2 elementi sono uguli
function Paragone(element1,element2) {

    let Result = element1 === element2 ? "é palindromo" : 'Il palindromo è una sequenza di caratteri che, letta al contrario, rimane invariata. Quindi secondo te ???';

    return Result
}