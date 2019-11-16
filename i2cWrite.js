basic.forever(function () {

    pins.i2cWriteNumber(0x1E, 1, NumberFormat.UInt8LE)/*writes a value of 1 to address 0x1E. 
    this is an internal address and will show address and data frames*/
    basic.pause(100)//pause for 100ms to let the user see the display and the scope to trigger


})
