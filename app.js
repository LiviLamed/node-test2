const _ = require('lodash')

const items = [2, [3,7], [1,[3,10]]]
const people = {
    students: {
        charlesClore: "Lyle",
        hanisuyee: "livi",
        givatGonen: {
            student1: "mazor",
            student2: "shaked"
        },
        grownUps: "Oneg"

    }
}
const newArr =  _.flatMapDeep(people)

console.log(newArr)