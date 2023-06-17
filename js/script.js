const tela = document.querySelector('.tela');
const caseConsole = document.querySelector('.case');
const power = document.querySelector('#luz');
const container = document.querySelector('.container');

const red = '#FF0000';
const btnLit = '#D62B2B';
const btnOff = '#3E3434';
const yellow = '#FFF71B';
const blue = '#0F46B6';
const green = '#00FF00';
const black = '#262626';

const size = "180px 150px";

const screenOn = "url('img/start.gif')";
const screenOff = 'rgb(100, 98, 98)';

const mario = ["url('img/mario.gif')", "url('img/super_mario.jpg')"];
const pokemon = ["url('img/3.webp')", "url('img/pokemon_red.jpg')"];
const zelda = ["url('img/zelda.gif')", "url('img/zelda_wallpape.jpg')"];
const donkey = ["url('img/donkey.gif')", "url('img/donk_wallpape.jpg')"];
const marioCart = ["url('img/marioCart-gif.webp')", "url('img/mario_wallpaper.jpg')"];
const smurfs = ["url('img/smurfs.gif')", "url('img/smurfs_wallpape.jpg')"];

const turnOnConsole = (value) => {
    if (value === 'start') {
        tela.style.backgroundImage = screenOn;
        tela.style.backgroundSize = size;
        power.style.background = btnLit;
    }
    
    if (value === 'select'){
        tela.style.background = screenOff;
        power.style.background = btnOff;
    }
}

const selectedCor = (value) => {
    if (value === 'red' ) return caseConsole.style.background = red;
    if (value === 'yellow' ) return caseConsole.style.background = yellow;
    if (value === 'blue' ) return caseConsole.style.background = blue;
    if (value === 'green' ) return caseConsole.style.background = green;
    if (value === 'black' ) return caseConsole.style.background = black;
}

const selectedGame = (value) => {

    tela.style.backgroundSize = size;
    power.style.background = btnLit;
    container.style.backgroundSize = 'cover';

    if (value === 'mario') {
        tela.style.backgroundImage = mario[0];
        container.style.backgroundImage = mario[1];
    }

    if (value === 'pokemon') {
        tela.style.backgroundImage = pokemon[0];
        container.style.backgroundImage = pokemon[1];
    }

    if (value === 'zelda') {
        tela.style.backgroundImage = zelda[0];
        container.style.backgroundImage = zelda[1];
    }

    if (value === 'donkey') {
        tela.style.backgroundImage = donkey[0];
        container.style.backgroundImage = donkey[1];
    }

    if (value === 'marioCart') {
        tela.style.backgroundImage = marioCart[0];
        container.style.backgroundImage = marioCart[1];
    }

    if (value === 'smurfs') {
        tela.style.backgroundImage = smurfs[0];
        container.style.backgroundImage = smurfs[1];
    }
}
