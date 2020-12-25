/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.*/


function duplicateCount(text) {
    let obj = {};
    let count = 0;
    let lowerText = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (!(lowerText[i] in obj)) {
            obj[lowerText[i]] = 1;
        } else if (lowerText[i] in obj && obj[lowerText[i]] === 1) {
            count++;
            obj[lowerText[i]] += 1;
        } else {
            continue
        }
    }
    return count;
}