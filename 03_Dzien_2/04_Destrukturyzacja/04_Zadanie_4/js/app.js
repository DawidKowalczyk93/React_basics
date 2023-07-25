const generateRandomNumbers = () => {
    const randomArr = [];
    for( let i = 0; i <= 5; i++ ) {
        randomArr.push(Math.floor(Math.random() * 6));
    }
    return randomArr;
};

const randomNumbersArr = generateRandomNumbers();

console.log(randomNumbersArr);

const [a, , b] = randomNumbersArr;

console.log(a, b);
