var game;
window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 540,
        height: 960,
        parent: 'phaser-game',

        scene: [Scene1, Scene2, Scene3]
    };
    game = new Phaser.Game(config);
}