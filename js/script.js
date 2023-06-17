const tela = document.querySelector('.tela');
const caseConsole = document.querySelector('.case');
const power = document.querySelector('#luz');
const container = document.querySelector('.container');

const turnOnConsole = (value) => {
    if (value === 'start') {
        tela.style.backgroundImage = "url('img/start.gif')";
        tela.style.backgroundSize = "180px 150px";
        power.style.background = '#D62B2B';
    }
    
    if (value === 'select'){
        tela.style.background = 'rgb(100, 98, 98)';
        power.style.background = '#3E3434';
    }
}

const selectedCor = (value) => {
    if (value === 'red' ) return caseConsole.style.background = '#FF0000';
    if (value === 'yellow' ) return caseConsole.style.background = '#FFF71B';
    if (value === 'blue' ) return caseConsole.style.background = '#0F46B6';
    if (value === 'green' ) return caseConsole.style.background = '#00FF00';
    if (value === 'black' ) return caseConsole.style.background = '#262626';
}

const selectedGame = (value) => {

    tela.style.backgroundSize = "180px 150px";
    power.style.background = '#D62B2B';
    container.style.backgroundSize = 'cover';

    if (value === 'mario') {
        tela.style.backgroundImage = "url('img/mario.gif')";
        container.style.backgroundImage = "url('img/super_mario.jpg')";
    }

    if (value === 'pokemon') {
        tela.style.backgroundImage = "url('img/3.webp')";
        container.style.backgroundImage = "url('img/pokemon_red.jpg')";
    }

    if (value === 'zelda') {
        tela.style.backgroundImage = "url('img/zelda.gif')";
        container.style.backgroundImage = "url('img/zelda_wallpape.jpg')";
    }

    if (value === 'donkey') {
        tela.style.backgroundImage = "url('img/donkey.gif')";
        container.style.backgroundImage = "url('img/donk_wallpape.jpg')";
    }

    if (value === 'marioCart') {
        tela.style.backgroundImage = "url('img/marioCart-gif.webp')";
        container.style.backgroundImage = "url('img/mario_wallpaper.jpg')";
    }

    if (value === 'smurfs') {
        tela.style.backgroundImage = "url('img/smurfs.gif')";
        container.style.backgroundImage = "url('img/smurfs_wallpape.jpg')";
    }
}
