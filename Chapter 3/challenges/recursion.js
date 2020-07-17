/// recursion, because we can...
function isEven(number) {
    if(number == 0) {
        return true;
    } else if(number == 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}
console.log(isEven(10));

/// by contrast, this is an efficient way of doing this:
function isEvenSimple(number) {
    return number % 2 == 0;
}
console.log(isEvenSimple(9));