//случ целое

function getRandomBetween(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}
console.log(getRandomBetween(1, 42))

// случ дробное
function getRandomArbitary(min, max){
    return Math.random(Math.random() * (max - min) + min)
}
console.log(getRandomArbitary(1, 42))