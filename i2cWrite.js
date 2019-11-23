basic.forever(function () {
    pins.i2cWriteNumber(0x19, 0, NumberFormat.Int8LE)
    basic.pause(700)
    pins.i2cWriteNumber(0x1E, 11, NumberFormat.Int8LE)
    basic.pause(700)
})


