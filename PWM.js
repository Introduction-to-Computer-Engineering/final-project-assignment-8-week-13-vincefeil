//Varying a PWM signal
basic.forever(function () {
    for (let i = 9; i < 171; i += 9) {//using the for loop to increase the value of the pulse with in 5% increments starting at 5% of 180
                                        

        basic.pause(100)//pause so the signal change can be seen on the scope
        /*if (i > 170) {//used for trouble shooting
            i = 9
        }*/



        pins.servoWritePin(AnalogPin.P0, i)//write the value of i to P0
    }
    for (let i = 171; i > 9; i += -9) {//using the for loop to decrease the value of the pulse with in 5% increments starting at 95% of 180

        basic.pause(100)//pause so the signal change can be seen on the scope
        /*if (i > 170) {//used for trouble shooting
            i = 9
        }*/



        pins.servoWritePin(AnalogPin.P0, i)//write the value of i to P0
    }

})
