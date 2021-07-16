const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Welcome you user... Who are you again?: ", function(answer) {
    console.log(`I don't believe you are ${answer}`)
    reader.question("Give me a valid 10 or more character password or be deleted: ", function(password) {
        (password.length >= 10) ? console.log("oh, yeah! That's an awesome super special password!")
        : console.log("FAILURE, YOU WILL NOW BE DELETED")
        reader.close()
    })
});