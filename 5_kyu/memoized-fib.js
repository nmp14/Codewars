/* The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them.
When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.*/

// Didn't solve. Saved other's code for reference and practice.

var fibonacci = (function () {
    var cache = {};

    return function (n) {

        // Base case
        if (n == 0 || n == 1)
            return n;

        // Recurse only if necessary
        if (cache[n - 2] === undefined)
            cache[n - 2] = fibonacci(n - 2);
        if (cache[n - 1] === undefined)
            cache[n - 1] = fibonacci(n - 1);

        return cache[n - 1] + cache[n - 2];
    };
})(); // Immediately invoke to create a closure for the cache variable