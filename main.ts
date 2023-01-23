radio.onReceivedString(function (receivedString) {
    msg = receivedString
    basic.showString(msg)
    basic.showIcon(IconNames.Heart)
})
let msg = ""
radio.setGroup(2)
