let contador = 0

let racao = 100;

while(contador < 3){

    let quantidade_vendida = (document.getElementById("quantidade").value);

    if(quantidade_vendida > 100){
        alert("Estoque esgotado.");
    } 

    contador = contador + 1;

    console.log(quantidade_vendida);
}