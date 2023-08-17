


// function inchestofeets(input){

//     return input / 12  + " ft"
// }
// console.log(inchestofeets(24));
// console.log(inchestofeets(66));
// console.log(inchestofeets(600));
// console.log(inchestofeets(12));





// let fruits = ["apple","orange","mango","banana"];



// fruits[0] = "apples"

// console.log(fruits)

// let myself = [
//     "Min Thu Khant",
//     16,
//     null,
//     "devoloper",
//     [
//         "html",
//         "css",
//         "js"
//     ],
//     "Mandalay",
//     "1000000",
//     false,
// ];

// console.log(myself)
// console.log(`My name is ${myself[0]} and live in ${myself[5]}.
// work as ${myself[3]} anstand in ${myself[4][1]}`);




// let arr = [];
// arr[0] = "aaaaa",
// arr[1] = "bbbb",
// arr[7] = "cccc",
// arr[4] = "dddd"

// console.log(arr)
// console.log(typeof arr)
// console.log(arr.length)







// let arr = [];
// arr[arr.length] = "aaaaa";
// arr[arr.length] = "bbbbb";
// arr[arr.length] = "ccccc";
// arr[arr.length] = "ddddd";

// console.log(arr)
// console.log(arr[0])
// console.log(arr[arr.legnth-1])





// let myself = {
//     myName: "Min Thu Khant",
//     myAge: 16,
//     gf: null,
//     job: "Devopoler",
//     skill: ["html","css","js"]
//     }

//     console.log(typeof myself)
//     console.log(myself)
//     console.log(myself.myName)
//     console.log(myself.myAge)
//     console.log(myself.skill[2])

//     console.log(myself["job"])






// let obj = {};

// obj.aa = "aaa";
// obj.bb = "bbb";
// obj["c"] = "ccc";


// console.log(typeof obj);
// console.log(obj)






// let name = "Mg Mg";
// let age = 15;
// let money = 200;
// money -= 50;
// let mgbag = ["mm","eng","bio",false];
// let mgcansmoke = false;
// let mgfriendscansmoke = true;

// const MgMgobj = {
//     name : "Mg Mg",
//     age : 15,
//     money,
//     bag : ["mm","eng","bio",false],
//     cansmoke : false,
// }

// const KyawKyawobj = {};
// KyawKyawobj.name = "Kyaw Kyaw";
// KyawKyawobj.age = 16;
// KyawKyawobj.money = 500;
// KyawKyawobj.bag = ["mm","eng"]
// KyawKyawobj.cansmoke = true;

// const MyaMyaobj = {
//     name : "Mya Mya",
//     age : 15,
//     money : 1000,
//     bag : ["mm","eng","math","bio","makeup"],
//     cansmoke : true
// }

// // console.log(MgMgobj)
// // console.log(KyawKyawobj)
// // console.log(MyaMyaobj)

// const students = [
//     {
//         name : "Mg Mg",
//         age : 15,
//         money,
//         bag : ["mm","eng","bio",false],
//         cansmoke : false,
//     },

//     {
//         name : "Kyaw Kyaw",
//         age : 16,
//         money : 500,
//         bag : ["mm","eng"],
//         cansmoke : true
//     },

//     {
//         name : "Mya Mya",
//         age : 15,
//         money : 1000,
//         bag : ["mm","eng","math","bio","makeup"],
//         cansmoke : true
//     }

// ];

// console.log(students);
// console.log(students[0].name)
// console.log(students[1].cansmoke)
// console.log(students[2].bag[3])


let num = 5;

// num = num + 1;
// num = num + 1;
// num = num + 1;
// num = num + 1;


// num += 1;
// num += 1;
// num += 1;
// num += 1;


// ++num;
// ++num;
// ++num;
// ++num;

// console.log(num--)
// console.log(num)

// let condition = true
// condition = !condition
// condition = !condition
// condition = !condition





// let condition = false || true || false

// console.log(condition)




// let x = 5;

// console.log(x > 10 ? true : false)



// let dinner = false;
// let gg = dinner ? `စားပြီး` : `မစားရသေး`

// console.log(`kmkl ${5 ? true : false}`)






// function run(text="aaa"){
//     return "This is run" + text;
// };

// console.log(run("cccc"))



// const run = function(text=`aa`){
//     return `This is run` + text
// }

// console.log(run())


// (function(){
//     let x = 5
//     let y = 10
//     console.log(x + y)
//     return x + y
// })()


// function run(){
//     let g = 4
//     let i = 2
// }

// console.log(run())


// console.log(`${(function(){return 5})() + 10}`)




function showRecult(text){
    return `This is recult` + text
}

function inchtofeet(input){
    return showRecult(input / 12 + `feet`)
}