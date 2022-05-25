const names = ["Guadalupe", "ollie", "Aki"];

function writeCards(names, surprise) {
    const newNames = []
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
        
    }
    console.log(newNames)
    return newNames
} 

function countDown() {
    let countDown = 10
while (countDown >= 0) {
    console.log(countDown--)
}

}