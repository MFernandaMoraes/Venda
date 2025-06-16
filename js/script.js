let contador = 0

alert("Cadastro");

while(contador <=3){
    let nome = prompt("Digite seu nome completo: ");
    let telefone = prompt("Digite seu telefone: ");
    let email = prompt("Digite seu email: ");

    contador = contador + 1;

    console.log("Nome completo: " + nome);
    console.log("Telefone: " + telefone);
    console.log("Email: " + email);

}