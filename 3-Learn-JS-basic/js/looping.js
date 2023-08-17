// for(let i = 1; i <= 10; i++){
//     if(i === 3) continue
//     console.log(i + "=======")
    
// }


// const letters = ["a","b","c","d"]

// for(i = 0; i < letters.length; i++) {
//     console.log("index",i,"---",letters[i])
// }


// const marks = [100,96,73,84,62]
// let totalmarks = 0

// for(let mark = 0; mark < marks.length; mark++) {
//     console.log(marks[mark])
//     totalmarks += marks[mark]
// }

// console.log("total", totalmarks)


// const mgmginfo = {
//     Name : "MgMg",
//     Age : 15,
//     marks : [
//         {
//             id : 1,
//             Subject : "Myanmar",
//             mark : 54
//         },
//         {
//             id : 2,
//             Subject : "English",
//             mark : 95
//         },
//         {
//             id : 3,
//             Subject : "Math",
//             mark : 82
//         },
//         {
//             id : 4,
//             Subject : "Geography",
//             mark : 53
//         },
//         {
//             id : 5,
//             Subject : "History",
//             mark : 64
//         },
//         {
//             id : 6,
//             Subject : "Science",
//             mark : 75
//         }
//     ]
// }

// mgmginfo.totalmarks = 100
// mgmginfo.result = {};

// for(i = 0; i < mgmginfo.marks.length; i++) {
//     console.log(mgmginfo.marks[i].mark)
//     mgmginfo.totalmarks += mgmginfo.marks[i].mark
//     // mgmginfo.result[mgmginfo.marks[i].Subject] = mgmginfo.marks[i].mark >= 40 ? "pass" : "fail"
//     if(mgmginfo.marks[i].mark >= 40) {
//         mgmginfo.result[mgmginfo.marks[i].Subject] = "pass"
//     }else{
//         mgmginfo.result[mgmginfo.marks[i].Subject] = "fail"
//     }
// }
// console.log(mgmginfo.totalmarks)



// // console.log(mgmg.marks[3].mark)
// console.log(mgmginfo)


// function stargenarator(amount,form = "* "){
//     let star = ""
//     for(i = 1 ; i <= amount ; i++) {
//         star += form
//     }
//     return star;
// }

// for( let i = 1 ; i <= 6 ; i++){
//     console.log(stargenarator(i,"^ "))
// }





// for(let i = 6 ; i >=1 ; i --){
//     let star = ""
//     for(let x = 1 ; x <= i ; x++){
//         star += "* "
//     }
//     console.log(star,i)
// }

// for(let i = 1 ; i <= 6 ; i++){
//     // console.log(stargenarator(i,i%2 === 0 ? "= " : "* "))

//     if(i%2 === 0){
//         console.log(stargenarator(i,"= "))
//     }else{
//         console.log(stargenarator(i,"* "))
//     }
// }


// for(let i = 1 ; i <= 5 ; i++){
//     let rating = ""
//     for(let x = 1 ; x <= 5 ; x++){
//         // if(x <= i){
//         //     rating += "* "
//         // }else{
//         //     rating += "= "
//         // }
//         rating +=  x <= i ? "* " : "- "
//     }
//     console.log(rating,i)
// }


const rating = [
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

for(let i = 0 ; i < rating.length ; i++){
    let star = ""
    for(x = 1 ; x <= 5 ; x++){
        if(x <= rating[i].rate) {
            star += "* "
        }else{
            star += "- "
        }
    }
    console.log("ID :",rating[i].row," |","Rating :",star,"|",rating[i].rate,"|",rating[i].name)
}
