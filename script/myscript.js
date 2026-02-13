let km = prompt ("Inserire il numero di chilometri da percorrere")
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
