function countOccurrences(str, sub) {
    return str.split(sub).length - 1;
}

console.log(countOccurrences("banana", "na")); 
