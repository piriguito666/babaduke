input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.stop()
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
    basic.showIcon(IconNames.No)
})
