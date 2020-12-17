/* Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. */

function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) {
        return -1;
    }
    return next = Math.pow(Math.sqrt(sq) + 1, 2);
}