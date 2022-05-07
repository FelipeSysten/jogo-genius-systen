let order = [];
let clickOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector ('.blue');
const red = document.querySelector ('.red');
const green = document.querySelector ('.green');
const yellow = document.querySelector ('.yellow');


//cria order aleatoria de cores 
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = []; 

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    } 
}


//acende a proxima cor
let lightColor = (element, number) => {
    number = number + 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });

}


//checa os botons clicados são os mesmo da order gerada no jogo
let checkOrder = () => {
    for (let i in clickOrder) {
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if (clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo Nível`);   
        nextLevel();
    }
}

//função para o click do usuario

let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250);

    
}

//funçao que retorna a cor

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red ;
    } else if (color == 2){
        return yellow;
    } else if ( color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo

let nextLevel = ( ) => {
    score++;
    shuffleOrder();
}


green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//funcção game over

let gameOver = () => {
    alert(`Pontuação: ${score}!\n Você perdeu o Jogo!\nClique em OK para iniciar o jogo`);
    order = [];
    clickOrder = [];

    playGame();
}
//funçao inicio do jogo
let playGame =() => {
    alert('Bem vindo ao Geneius! Iniciando o jogo!');
    score = 0;

    nextLevel();
}
//eventos de click para o jogos
green.onclick = () =>click(0);
red.onclick = () =>click(1);
yellow.onclick = () =>click(2);
blue.onclick = () =>click(3);


//inicio do jogo
playGame();