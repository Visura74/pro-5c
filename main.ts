input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # # . .
        # . . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . #
        . . . # .
        . . # . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    `)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
