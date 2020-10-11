const OPPONENT_HEIGHT = 2.7,
    OPPONENT_PICTURE = "assets/alien.png",
    OPPONENT_PICTURE_DEAD = "assets/alien_muerto.png",
    OPPONENT_SPEED =3,
    OPPONENT_WIDTH = 5,

    GAME_OVER_PICTURE = "assets/game_over.png",
    GAME_WINNER = "assets/you_win.png",

    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,

    PLAYER_HEIGHT = 4.5,
    PLAYER_WIDTH = 4,
    PLAYER_PICTURE = "assets/nave.png",
    PLAYER_PICTURE_DEAD = "assets/nave_muerta.png",
    PLAYER_SPEED = 20,
    PLAYER_LIVES = 3,

    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/shot_jugador.png",
    SHOT_PICTURE_OPPONENT = "assets/shot_oponente.png",
    SHOT_WIDTH = 1.5,
    
    /*Jefe final*/
    BOSS_PICTURE = "assets/Jefe_final.png",
    BOSS_PICTURE_DEAD = "assets/Jefe_explosion.png",
    BOSS_SPEED = OPPONENT_SPEED*2,
    BOSS_HEIGHT = 3,
    BOSS_WIDTH = 5;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
        game = new Game();
        game.start();
    }
);