const records =[]

function calArea(width,breadth){
    let area = width * breadth
    let recordObject = {
        width : width + "sqft",
        breadth : breadth + "sqft",
        area : area + "sqft"
    }
    records[records.length] = recordObject
    return area + "sqft"
}

console.log (calArea(20,40))
console.log (calArea(10,20))
console.log (calArea(19,15))

console.table(records)
