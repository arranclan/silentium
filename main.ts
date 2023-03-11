basic.forever(function () {
    if (input.soundLevel() > 80) {
        music.setVolume(255)
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.stopAllSounds()
        basic.showIcon(IconNames.Confused)
        basic.pause(1000)
        for (let index = 0; index < 4; index++) {
            servos.P1.setAngle(90)
            servos.P1.setAngle(180)
            servos.P1.setAngle(90)
            servos.P1.setAngle(180)
        }
    } else if (input.soundLevel() > 40) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    }
})
