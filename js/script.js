let contador = 0

let racao = 100;

while(contador < 3){

    let quantidade_vendiada = prompt("Quantos Kg de ração deseja comprar: ");

    racao = racao - quantidade_vendiada; 

    contador = contador + 1;

    console.log(quantidade_vendiada);

    if(racao = 0){
        alert("Estoque esgotado.");
    } else{
        alert("Ainda em estoque.");
    }
}