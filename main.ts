// Increases Strike counter by 1 when A is pressed
input.onButtonPressed(Button.A, function () {
    // Increases strike count by 1
    Strikes += 1
    basic.showString("S")
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
        basic.showString("B")
        basic.showString("" + (Balls))
        basic.clearScreen()
        basic.pause(100)
        basic.showString("S")
        basic.showString("" + (Strikes))
        basic.clearScreen()
    }
})
// Increases Ball counter by 1 when B is pressed
input.onButtonPressed(Button.B, function () {
    // Increases ball count by 1
    Balls += 1
    basic.showString("B")
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
// stops ball counter from reaching a value higher than 4
Balls = Math.constrain(Balls, 0, 4)
// stops strike counter from reaching a value higher than 3
Strikes = Math.constrain(Strikes, 0, 3)
basic.forever(function () {
    // If strike counter is equal to 3. an S and an X are displayed to symbolize that 3 strikes have occurred and the game is over
    if (Strikes == 3) {
        basic.showString("S")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
// If ball counter is equal to 4. a B and an X are displayed to symbolize that 4 balls have been pitched and the game is over
basic.forever(function () {
    if (Balls == 4) {
        basic.showString("B")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
