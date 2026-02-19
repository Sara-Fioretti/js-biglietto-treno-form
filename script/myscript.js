/*let km = prompt ("Inserire il numero di chilometri da percorrere")
let età = prompt("Inserire l'età del passeggero")
console.log ("I km da percorrere sono " + km + " e l'età del passeggero è "+ età)

let prezzo 
if(età < 18){
    prezzo = ((km * 0.21)- ((km*0.21)*0.2))
}else if(età >65){
    prezzo = ((km * 0.21)- (km*0.21*0.4))
}else{
    prezzo = (km * 0.21)
}

console.log("Il prezzo del biglietto è "+ prezzo.toFixed(2)+ "€")
*/

let chilometri = document.getElementById ("km")
let eta = document.getElementById("age")
let prezzo = document.getElementById("price")
let bottone = document.getElementById("button")
let form = document.querySelector ("form")

form.addEventListener ("submit", function(event){
    event.preventDefault();
    let prezzoCalcolato
    if (eta.value < 18) {
        prezzoCalcolato = ((chilometri.value * 0.21) - ((chilometri.value * 0.21) * 0.2))
    } else if (eta.value > 65) {
        prezzoCalcolato = ((chilometri.value * 0.21) - (chilometri.value * 0.21 * 0.4))
    } else {
        prezzoCalcolato = (chilometri.value * 0.21)
    }   
    prezzo.value = prezzoCalcolato.toFixed(2)
})





/*
let chilometri = document.getElementById("km")
let eta = document.getElementById("age")
let prezzo = document.getElementById("prezzo")
let bottone = document.getElementById("submit-button")
let form = document.querySelector("form")

form.addEventListener("submit", function (event) {
    event.preventDefault();
}
  function pricing(eta, prezzo)
)

function pricing(età, prezzo) {
    if (eta.value < 18) {
        prezzo.innerText = ((km * 0.21) - ((km * 0.21) * 0.2))
    } else if (eta.value > 65) {
        prezzo.innerText = ((km * 0.21) - (km * 0.21 * 0.4))
    } else {
        prezzo.innerText = (km * 0.21)
    }
}
    /*<form action="">
        <label for="Chilometri">Chilometri da percorrere</label> <br>
        <input type="text" id="km" placeholder="Inserire i km da percorrere"> <br>
        <label for="Età">Età del passeggero</label> <br>
        <input type="text" id="age" placeholder="Inserire l'età del passeggero"><br>
        <input type="submit" id="submit-button"><br>
        <label for="price">Prezzo del biglietto</label>
        <input type="text" id="prezzo">
    </form>
*/