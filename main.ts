input.onButtonPressed(Button.A, function () {
    if (Strikes == 3) {
        // Shows that there have been 3 strikes
        basic.showString("3 Strikes!")
    } else {
        // Increases strike count by 1
        Strikes += 1
    }
})
// Shows both counters
input.onButtonPressed(Button.AB, function () {
    basic.showString("Pitches =")
    basic.showString("" + (Pitches))
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Strikes =")
    basic.showString("" + (Strikes))
})
input.onButtonPressed(Button.B, function () {
    if (Pitches == 4) {
        // Shows that 4 balls have been thrown
        basic.showString("4 Balls Have Been Thrown")
    } else {
        // Increases ball count by 1
        Pitches += 1
    }
})
// Resets both counters
input.onGesture(Gesture.Shake, function () {
    Pitches = 0
    Strikes = 0
    basic.showString("Reset")
})
// Sets counters to zero
let Strikes = 0
let Pitches = 0
Pitches = 0
Strikes = 0
