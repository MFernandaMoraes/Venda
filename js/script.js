let contador = 0

let racao = 100;

function vender(){

while(contador < 1){

    let quantidade_vendida = document.getElementById("quantidade").value;

    if(quantidade_vendida > 100){
        alert("Estoque esgotado.");
    } 

    contador = contador + 1;

    alert(quantidade_vendida);
}
}