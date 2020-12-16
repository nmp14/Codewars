// Capitalize every word.

String.prototype.toJadenCase = function () {

    str = this.toLowerCase();
    return str.split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
};