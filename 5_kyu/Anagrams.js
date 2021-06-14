function anagrams(word, words) {
    const newWord = word.split("").sort().join("");
    return words.filter((w) => w === w.split("").sort().join(""));
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));