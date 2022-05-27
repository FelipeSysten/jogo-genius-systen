const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');


// função que ativa eventos = basicamente ver os eventos do teclado e vai passar resposta com cada umas das condicionais *estrutura principal de movimento
function flyShip(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

//funcao de subir

function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}

// funcao descer

function moveDown(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "540px") {
        return 
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }

}

//funcionalidade de tiro

function fireLaser () {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement () {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png' ;
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}

//movimentar o laser

function moverLaser(laser) {
    let laserInterval = setInterval(() => {
        let position = parseInt(laser.style.left);

        if(xPosition === 340) {
            laser.remove();
        } else {
            laser.style.left = `${xPosition + 8}px`
        }
    }, 10);
}

window.addEventListener('keydown', flyShip);