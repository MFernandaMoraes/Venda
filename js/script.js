let contador = 0

let racao = 100;

function vender(){

//while(contador < 3){

    let quantidade_vendida = document.getElementById("quantidade").value;

    if(quantidade_vendida > racao){
        alert("Estoque esgotado.");
    } else {
        racao = racao - quantidade_vendida;
    }

    console.log("Ainda em estoque: " + racao);
    console.log("Quantidade comprada: " + quantidade_vendida);

    console.log(racao);
    console.log(quantidade_vendida);

     contador = contador + 1;

}
 
//}