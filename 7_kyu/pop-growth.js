/* p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0) */

function nbYear(p0, percent, aug, p) {
    let years = 0;
    let pop = p0;
    while (pop < p) {
        pop = pop + (pop * (percent / 100)) + aug;
        years++;
    }
    return years;
}