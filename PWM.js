//Varying a PWM signal
basic.forever(function () {
    for (let i = 9; i < 171; i += 9) {

        basic.pause(100)
        /*if (i > 170) {
            i = 9
        }*/



        pins.servoWritePin(AnalogPin.P0, i)
    }
    for (let i = 171; i > 9; i += -9) {

        basic.pause(100)
        /*if (i > 170) {
            i = 9
        }*/



        pins.servoWritePin(AnalogPin.P0, i)
    }

})
