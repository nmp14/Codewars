/*
You are provided with a list (or array) of integer arrays (or tuples). 
Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array).
Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
*/

var number = function (busStops) {
    let people = 0;
    for (let i = 0; i < busStops.length; i++) {
        people += (busStops[i][0] - busStops[i][1]);
    }
    return people;
}
