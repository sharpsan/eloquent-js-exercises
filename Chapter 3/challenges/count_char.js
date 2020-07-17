function countChar(char, string) {
    let occurrenceCount = 0;
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (letter === char)
            occurrenceCount++;
    }
    return occurrenceCount;
}

function countBs(string) {
    return countChar("B", string);
}

console.log(countChar("A", "Hello World A AAAA"));
console.log(countBs("Took a brisk walk down the boardwalk with Brittany."));