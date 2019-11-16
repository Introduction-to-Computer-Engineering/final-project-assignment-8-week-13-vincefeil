basic.forever(function () {
    let inValue = pins.i2cReadNumber(0x1E, NumberFormat.Int8LE, false)//set the variable inValue to the value read from i2cRead
    basic.showNumber(inValue)//display the value of inValue
    basic.pause(100)//pause for 100ms to give the user a chance to see the display and the oscope a chance to trigger.
    
}) 
