const fruits = {
    apple : 500,
    orange : 550,
    mango : 700,
    banana : 300
}

let total = 0


function tax(amount,taxRate = 5){
    return amount * (taxRate/100)
}




function buy(fruitName,quantity){
    let cost = quantity * fruits[fruitName]
    // let totalCost = cost + tax(cost)
    total += cost
    // return fruitName + ":" + quantity + ":" + cost + "MMK"
    return `${fruitName} : ${quantity} = ${cost} MMK`
}

console.log(buy("apple",5))
console.log(buy("orange",3))
console.log(buy("mango",2))

console.log("TotalCost :" , total , "MMK")
console.log("Total Tax :" , tax(total) , "MMK")
console.log("Total Price :" , total + tax(total) , "MMK")

