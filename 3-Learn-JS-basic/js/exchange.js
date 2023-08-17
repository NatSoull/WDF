const rates = {
    usd : 2100,
    eur : 2283,
    sgd : 1595
}

function usdtommk(usd){
    return (usd * rates.usd) + "MMK"
}

function tommk(input,fromcurrency){
    return (input * rates[fromcurrency]) + "MMk"
}

function tocurrency(input,currency){
    return (input / rates[currency]) + currency
}




function toanycurrency(inputAmount,fromCurrency,toCurrency){
    let mmk = inputAmount * rates[fromCurrency]
    let result = (mmk / rates[toCurrency])
    return result + toCurrency
}



console.log(tommk(1,"usd"))
console.log(tommk(1,"sgd"))
console.log(tommk(1,"eur"))


console.log(tocurrency(10000,"usd"))
console.log(tocurrency(10000,"sgd"))
console.log(tocurrency(10000,"eur"))

console.log(toanycurrency(500,"usd","sgd"))
console.log(toanycurrency(1,"sgd","sgd"))
console.log(toanycurrency(500,"eur","usd"))