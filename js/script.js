let contador = 0

let produto = 10;

while(contador < 3){

    let produto = prompt("Que produto deseja comprar: ");
    let quantidade = Number(prompt("Qual a quantidade: "));

    produto = produto + (quantidade);

    contador = contador + 1;

    console.log(produto);

    if(produto >=10){
        alert("Estoque esgotado.");
    } else{
        alert("Ainda em estoque.");
    }
}