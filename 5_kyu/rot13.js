/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
    let newMessage = '';
    for (let i = 0; i < message.length; i++) {
        if (/^[A-Z]$/.test(message[i])) {
            let asciiNum = message.charCodeAt(i) - 65;
            newMessage = newMessage.concat(String.fromCharCode(((asciiNum + 13) % 26) + 65));
        } else if (/^[a-z]$/.test(message[i])) {
            let asciiNum = message.charCodeAt(i) - 97;
            newMessage = newMessage.concat(String.fromCharCode(((asciiNum + 13) % 26) + 97));
        } else {
            newMessage = newMessage.concat(message[i]);
        }
    }
    return newMessage;
}