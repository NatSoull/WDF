const fruits = ["apple","pineapple","mango","lemon","grape","concornet","avogado"]

// for(let i = 0 ; i < fruits.length ; i++){
//     console.log(i,fruits[i])
// }

// for(fruit of fruits){
//     console.log(fruit)
// }

// for(index in fruits){
//     console.log(index,fruits[index])
// }

// const mgmginfo = {
//     name : "Mg Mg",
//     age : 16,
//     job : "Student"
// }

// for(key in mgmginfo){
//     console.log(key,mgmginfo[key])
// }


const ratings = [
    {
        row : 1,
        name : "Mg Mg",
        rate : 5
    },
    {
        row : 2,
        name : "Aung Aung",
        rate : 2
    },
    {
        row : 3,
        name : "Kyaw Gyi",
        rate : 5
    },
    {
        row : 4,
        name : "Hla Hla",
        rate : 1
    },
    {
        row : 5,
        name : "Mya Mya",
        rate : 3
    },
    {
        row : 6,
        name : "Ko Ko",
        rate : 2
    }
]

for(rating of ratings){
    // console.log(rating.row,rating.name,rating.rate)
    for(key in rating){
        console.log(key,rating[key])
    }
    console.log("- - - - - - - -")
}