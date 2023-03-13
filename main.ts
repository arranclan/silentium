basic.forever(function () {
    if (input.soundLevel() > 60) {
        music.setVolume(255)
        music.playTone(988, music.beat(BeatFraction.Double))
        music.stopAllSounds()
        basic.showIcon(IconNames.Confused)
        basic.pause(5000)
        servos.P1.setAngle(90)
    } else if (input.soundLevel() > 5) {
        basic.showIcon(IconNames.Asleep)
        basic.pause(2000)
        servos.P1.setAngle(0)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        servos.P1.setAngle(0)
    }
})
