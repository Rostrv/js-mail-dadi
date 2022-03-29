function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * 6) + 1;
}
let human = getRandomIntInclusive(1, 6)
console.log(human)

function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * 6) + 1;
}
let computer = getRandomIntInclusive(1, 6)
console.log(computer)

if (human > computer) {
    console.log('hai vinto')
} else if (human < computer) {
    console.log('hai perso')
} else {
    console.log('pareggio')
}