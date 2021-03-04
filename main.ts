// Increases Strike counter by 1
input.onButtonPressed(Button.A, function () {
    // Increases strike count by 1
    Strikes += 1
    basic.showNumber(Strikes)
})
input.onButtonPressed(Button.AB, function () {
    // Shows counters, unless counters are at maximum
    if (Balls == 4 || Strikes == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.clearScreen()
        basic.pause(200)
        basic.showString("" + (Balls))
        basic.clearScreen()
        basic.pause(100)
        basic.showString("" + (Strikes))
        basic.clearScreen()
    }
})
// Increases Ball counter by 1
input.onButtonPressed(Button.B, function () {
    // Increases ball count by 1
    Balls += 1
    basic.showNumber(Balls)
})
// Resets Counters
input.onGesture(Gesture.Shake, function () {
    Balls = 0
    Strikes = 0
    basic.showString("Reset")
})
// Sets counters to 0 at beginning of game
let Strikes = 0
let Balls = 0
Balls = 0
Strikes = 0
// Shows an X if Strike counter hits 3
basic.forever(function () {
    if (Strikes == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
// Shows an X if Ball counter hits 4
basic.forever(function () {
    if (Balls == 4) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
