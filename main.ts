basic.forever(function () {
    if (input.lightLevel() > 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
