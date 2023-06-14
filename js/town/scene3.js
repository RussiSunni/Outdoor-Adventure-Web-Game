class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
        this.textNum = 0;
        this.bgNum = 0;
    }
    preload() {
        //load our images or sounds 
        this.load.image("cash", "assets/Backgrounds/Town/cash.png");

    }

    create() {

        // Background.        
        this.bg = this.add.image(0, 0, 'cash')
            .setOrigin(0)

        this.bgDisplay();

        this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
        this.narrative = this.add.text(20, 720, 'Oh look, Grandma left me some money to get myself gear for the upcoming hike with Grandpa.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24 })

        this.textNum = 2;

        this.input.on('pointerdown',
            function () {
                if (this.textNum == 2) {
                    this.narrative.setText("I'm so excited.Finally, a real adventure.")
                    this.textNum = 3;
                }
                else if (this.textNum == 3) {
                    this.narrative.setText("I'm going to go get the stuff right now.")
                    this.textNum = 4;
                }
                else if (this.textNum == 4) {
                    this.narrative.setText("I'll cut across the park.")
                    this.textNum = 5;
                }
            }, this
        );
    }

    bgDisplay() {
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
    }
}