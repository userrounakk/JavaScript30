const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const now = new Date();

// is at least one person 19 or older ?
const atLeastOneNineTeen = people.some((person) => {
    return (now.getFullYear() - person.year) >= 19
})
console.log(atLeastOneNineTeen);

// is everyone 19 or older ?
const everyOneNineTeen = people.every((person) => {
    return (now.getFullYear() - person.year) >= 19
})
console.log(everyOneNineTeen);

// find the comment with the ID of 823423
const cId = comments.find((comment) => {
    return comment.id == 823423
})
console.log(cId);

// Find the index of comment with the id 823423
const cIdIndex = comments.findIndex(comment => {
    return comment.id === 823423
})
console.log(cIdIndex);

// delete the comment with the ID of 823423
comments.splice(cIdIndex, 1)

console.table(comments)
