// function didipass(exammark,vipermark){
//     if(exammark >= 60 && vipermark >= 60){
//         return "you passed"
//     }
//     return "you failed"
// }

// console.log(didipass(60,60))
// console.log(didipass(50,60))
// console.log(didipass(83,75))
// console.log(didipass(60,46))



// function howToReachKTV(busNo){
//     if(busNo === 65 || busNo === 20){
//         return "you will reach KTV"
//     }
//     return "you won't reach KTV"
// }


// console.log(howToReachKTV(66))
// console.log(howToReachKTV(65))
// console.log(howToReachKTV(21))
// console.log(howToReachKTV(20))


// let a = "Min Thu Khant"
// console.log(a)
// a = !a
// console.log(a)
// a = !a
// console.log(a)
// a = !a
// console.log(a)

// let a = true;

// a && (function(){
//     console.log("Yo")
//     return true
// })() && console.log("Hoo hooo")



// function showMyName(name){
//     if(typeof name == "string") return name;
//     return false
// }

// console.log(showMyName(54))
// console.log(showMyName("Min Thu Khant"))
// console.log(showMyName(["a","b"]))
// console.log(showMyName({a : "a", b : "b"}))

function run(a,b,c){
    console.log(arguments)
}

console.log(run("a","b","c"))
