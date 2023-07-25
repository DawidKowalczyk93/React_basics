const whoAreYou = (person) => {
    return `My name is ${person.name} ${person.lastName}.
            I am ${2023 - person.yearOfBirth} years old.
            My profession is ${person.profession}.`
};




const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

console.log(whoAreYou(person));