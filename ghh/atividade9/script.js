/*variáveis para o jogo*/
let mostrar = document.getElementById('resultado')
let computador = 0;
let jogador = 0;
/*as linhas abaixo são para gerar um número aleatorio*/
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
computador = min + Math.trunc(dif * aleatorio);

function jogar(){
    jogador = Number(prompt("Qual é o seu palpite?"));

    if(jogador < computador){
        mostrar.innerHTML = `<p>Voce pensou em ${jogador}, meu número é <b>MAIOR</b>!</p>`;
    } else if(jogador > computador){
        mostrar.innerHTML = `<p>Voce pensou em ${jogador}, meu número é <b>MENOR</b>!</p>`;
    } else if(jogador == computador) {
        mostrar.innerHTML = `<o><b>PARABÈNS!</b> Voce acertou! Eu tinha pensado no número ${computador}</p>`;    


    }
}