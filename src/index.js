// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if (currency > 10000) { return { error: "You are rich, my friend! We don't have so much coins for exchange" } }
    if (currency <= 0) { return {} }

    let money = {};
    let helperArray = [['H', 50], ['Q', 25], ['D', 10], ['N', 5], ['P', 1]];
    let len = helperArray.length;

    for (let i = 0; i < len; i++) {
        if (currency >= helperArray[i][1]) {
            if (currency / helperArray[i][1] >= 1) {
                money[helperArray[i][0]] = parseInt(currency / helperArray[i][1]);
                currency = currency - parseInt(currency / helperArray[i][1]) * helperArray[i][1];
            }
        }
    }
    return money;
}