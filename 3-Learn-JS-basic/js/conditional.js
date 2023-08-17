if(false){
    console.log("a")
    console.log("b")
    console.log("c")
}else{
    console.log("This is false")
}


function canicome(gotoschooltime){

    // let result;

    // if(gotoschooltime <= 9){
    //     result = "ကျောင်းလာပါ";
    // }else{
    //     result = "ကျောင်းမလာပါနဲ့";
    // }
    // return result

    if(gotoschooltime <= 9){
        return "ကျောင်းလာပါ" 
    }
    return "ကျောင်းမလာပါနဲ့"

}
console.log(canicome(9))
console.log(canicome(8))
console.log(canicome(10))
console.log(canicome(9.5))
console.log(canicome(7))


let mark = 90;

if(mark >= 80){
    console.log("Distation")
}else if(mark >= 40){
    console.log("Pass")
}else if(mark < 40){
    console.log("fail")
}