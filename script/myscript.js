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
let bottone = document.getElementById("button")
let form = document.querySelector ("form")
let prezzo = document.getElementById("price")
let anagrafica = document.getElementById ("anagrafica")


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





