import Scene1 from './scene1.js'
import Scene2 from './scene2.js'
import Scene3 from './scene3.js'
import Scene4 from './scene4.js'
import Scene5 from './scene5.js'

let config = {
    type: Phaser.AUTO,
    // parent: 'phaser-game',
    // Game size
    width: 600,
    height: 900,

    scale: {
        mode: Phaser.Scale.FIT,
        max: {
            width: 600,
            height: 900
        },
    },


    scene: [Scene5, Scene2, Scene3, Scene4, Scene1]
};
export default new Phaser.Game(config)
