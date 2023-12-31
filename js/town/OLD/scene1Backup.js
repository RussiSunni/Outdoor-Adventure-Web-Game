import { app } from '../lib/appScale.js'

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
        this.textNum = 0;
        this.bgNum = 0;
    }
    preload() {
        //load our images or sounds 
        this.load.image("apartment", "assets/Backgrounds/Town/apartment-2.png");
        this.load.image("elevator", "assets/Backgrounds/Town/elevator.png");
        this.load.image("hallway", "assets/Backgrounds/Town/hallway.png");
        this.load.image("photo", "assets/Backgrounds/Town/photo-closeup.png");
        this.load.image("kitchen", "assets/Backgrounds/Town/kitchen.png");
        this.load.image("cash", "assets/Backgrounds/Town/cash.png");
    }

    create() {
        this.imageList = []
        console.log(app)

        // BG 1 --------------------------------------------
        let bg = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'apartment')
        bg.orgWidth = bg.displayWidth
        bg.orgHeight = bg.displayHeight
        bg.update = function () {
            if (app.width * this.orgHeight / this.orgWidth < app.height) {
                this.displayWidth = app.height * this.orgWidth / this.orgHeight
                this.displayHeight = app.height
            } else {
                this.displayWidth = app.width
                this.displayHeight = app.width * this.orgHeight / this.orgWidth
            }
        }

        let textBg = this.add.rectangle(window.innerWidth / 2, window.innerHeight * 2, 540, 260, '#000000', 0.5);
        textBg.orgWidth = textBg.displayWidth
        textBg.orgHeight = textBg.displayHeight
        textBg.update = function () {
            if (app.width * this.orgHeight / this.orgWidth < app.height) {
                this.displayWidth = app.height * this.orgWidth / this.orgHeight
                this.displayHeight = app.height / 2
            } else {
                this.displayWidth = app.width
                this.displayHeight = (app.width * this.orgHeight / this.orgWidth) / 2
            }
        }

        this.narrative = this.add.text(app.centerX, app.centerY + 600, 'Our home.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 80 }).setOrigin(0.5);

        // -------------------------------------------------------------
        this.imageList.push(bg, textBg, this.narrative)

        // all sprite update
        for (let index = 0; index < this.imageList.length; index++) {
            this.imageList[index].update()
        }
        // -------------------------------------------------------------

        this.scale.on('resize', this.resize, this)

        this.cameraUpdate()
        this.resize()

        this.textNum = 2;

        this.input.on('pointerdown',
            function () {
                if (this.textNum == 2) {
                    this.narrative.setText('The big and bustling city.')
                    this.textNum = 3;
                    this.bgNum = 2;
                }
                else if (this.bgNum == 2) {

                    // BG 2 --------------------------------------------
                    bg = this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'elevator');
                    bg.orgWidth = bg.displayWidth
                    bg.orgHeight = bg.displayHeight
                    bg.update = function () {
                        if (app.width * this.orgHeight / this.orgWidth < app.height) {
                            this.displayWidth = app.height * this.orgWidth / this.orgHeight
                            this.displayHeight = app.height
                        } else {
                            this.displayWidth = app.width
                            this.displayHeight = app.width * this.orgHeight / this.orgWidth
                        }
                    }

                    let textBg = this.add.rectangle(window.innerWidth / 2, window.innerHeight * 2, 540, 260, '#000000', 0.5);
                    textBg.orgWidth = textBg.displayWidth
                    textBg.orgHeight = textBg.displayHeight
                    textBg.update = function () {
                        if (app.width * this.orgHeight / this.orgWidth < app.height) {
                            this.displayWidth = app.height * this.orgWidth / this.orgHeight
                            this.displayHeight = app.height / 2
                        } else {
                            this.displayWidth = app.width
                            this.displayHeight = (app.width * this.orgHeight / this.orgWidth) / 2
                        }
                    }

                    this.narrative = this.add.text(app.centerX, app.centerY + 600, 'Another boring day. Nothing ever happens here.', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 80 }).setOrigin(0.5);
                    this.narrative = this.add.text(20, 720, '', { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })

                    // -------------------------------------------------------------
                    this.imageList.push(bg, textBg, this.narrative)

                    // all sprite update
                    for (let index = 0; index < this.imageList.length; index++) {
                        this.imageList[index].update()
                    }
                    // -------------------------------------------------------------

                    this.scale.on('resize', this.resize, this)

                    this.cameraUpdate()
                    this.resize()

                    this.textNum = 4;
                    this.bgNum = 3;
                }
                else if (this.bgNum == 3) {
                    this.bg = this.add.image(0, 0, 'hallway')
                        .setOrigin(0)
                    this.bgDisplay();

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    if (this.textNum == 4) {
                        this.narrative = this.add.text(20, 720, "I wonder if Grandma's home.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 5;
                    }
                    else if (this.textNum == 5) {
                        this.narrative = this.add.text(20, 720, "Hmm, seems like the place is empty.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 6;
                        this.bgNum = 4;
                    }
                }
                else if (this.bgNum == 4) {
                    this.bg = this.add.image(0, 0, 'photo')
                        .setOrigin(0)
                    this.bgDisplay();

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    if (this.textNum == 6) {
                        this.narrative = this.add.text(20, 720, "I wish I could go to wild places, like Grandpa used to.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 7;
                    }
                    else if (this.textNum == 7) {
                        this.narrative = this.add.text(20, 720, "No school, homework. No one telling me what to do.", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 8;
                    }
                    else if (this.textNum == 8) {
                        this.narrative = this.add.text(20, 720, "What an exciting life. Nothing ever happens in my life...", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                        this.textNum = 8;
                        this.bgNum = 5;
                    }
                }
                else if (this.bgNum == 5) {
                    this.bg = this.add.image(0, 0, 'kitchen')
                        .setOrigin(0)
                    this.bgDisplay();
                    this.bgNum = 6;

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    this.narrative = this.add.text(20, 720, "I'm hungry. I'll have...", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                }
                else if (this.bgNum == 6) {
                    this.bg = this.add.image(0, 0, 'kitchen')
                        .setOrigin(0)
                    this.bgDisplay();
                    this.bgNum = 7;

                    this.textBg = this.add.rectangle(0, 700, 540, 260, '#000000', 0.5).setOrigin(0);
                    this.narrative = this.add.text(20, 720, "I'm hungry. I'll have...", { fontFamily: 'Arial', fill: '#ffffff', fontSize: 24, wordWrap: { width: 500, useAdvancedWrap: true } })
                }
                else if (this.bgNum == 7) {
                    this.scene.start("Scene2");
                }
            }, this
        );
    }

    bgDisplay() {
        this.bg.displayWidth = this.sys.canvas.width;
        this.bg.displayHeight = this.sys.canvas.height;
    }

    cameraUpdate() {
        app.update()
        const camera = this.cameras.main
        camera.setZoom(app.zoom)
        camera.centerOn(app.centerX, app.centerY)
    }

    resize() {
        this.cameraUpdate()
        // all sprite update
        for (let index = 0; index < this.imageList.length; index++) {
            this.imageList[index].update()
        }
    }

}