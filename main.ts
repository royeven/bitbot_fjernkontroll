radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("acc_x", input.acceleration(Dimension.X))
    basic.pause(100)
    radio.sendValue("acc_y", input.acceleration(Dimension.Y))
    basic.pause(100)
})
