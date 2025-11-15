input.onButtonPressed(Button.A, function () {
    radio.sendString("how are you doing ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
