const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
const person1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};


for (let key in person1) {
    console.log(key + ": " + person1[key]);
}

const person2 = {
    name: "Alice",
    age: 25,
    city: "New York"
};

Object.keys(person2).forEach(key => {
    console.log(key + ": " + person2[key]);
});
