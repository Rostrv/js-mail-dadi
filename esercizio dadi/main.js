function random1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 6) + 1;
}
let human = random1(1, 6)
console.log(human)

function random2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 6) + 1;
}
let computer = random2(1, 6)
console.log(computer)

if (human > computer) {
    console.log('hai vinto')
} else if (human < computer) {
    console.log('hai perso')
} else {
    console.log('pareggio')
}