const myself = {
    Name : "Min Thu Khant",
    Age : 16,
    relationship : "single",
    
    skill : function(what,where){
        return this.Name + " can do " + what + " at " + where
    },

    learn(anything="anything"){
        return  this.Name + " can learn " + anything
    },
    
    showthis : function(){
        console.log(this.Name)
    }
    
}

// console.log(myself.skill("CSS","online"))
// console.log(myself.learn("new"))
// console.log(myself)

console.log(myself.showthis())
console.log(myself.skill())
