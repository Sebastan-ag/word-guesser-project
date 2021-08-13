controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let word = game.askForString(progress, numLetters)
    if (word == secretWord) {
        game.over(true)
    } else {
        numGuesses--
        message.say("The word you have guessed is incorrect.")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentLetter = game.askForString(progress, 1)
    if (secretWord.includes(currentLetter)) {
        for (let i = 0; i <= numLetters - 1; i++) {
            if (secretWord.charAt(i) == currentLetter) {
                progress = progress.substr(0, i) + currentLetter + progress.substr(i + 1)
            }
        }
        message.say(currentLetter.toUpperCase() + " is in the secret word.")
        if (!guessedLetters.includes(currentLetter)) {
            message.say("You have already guessed " + currentLetter.toUpperCase() + ".")
            return
    }
    } else {
        numGuesses += -1
        message.say(currentLetter.toUpperCase() + " is not in the secret word.")

    }
})
function startGame () {
    progress = ""
    numGuesses = 5
    guessedLetters = ""
    progressMessage.setPosition(0, 10)
    message.setPosition(0, 20)
    message.say(" ")
    attempts.setPosition(0, 30)
    for (let index = 0; index < numLetters; index++) {
        progress = "" + progress + "_"
    }
}
let randomWords = ["means", "bedroom", "count", "unity", "dine", "spray", "mature", "give", "pigeon", "glacier", "calendar", "scratch", "quest", "revolutionary", "printer", "amber", "shark", "picture", "sell", "recession", "consider", " trance", "certain", "baseball"]
let guessedLetters = ""
let progress = ""
let currentLetter = ""
let message: Sprite = null
let attempts: Sprite = null
let progressMessage: Sprite = null
let numGuesses = 0
let numLetters = 0
let secretWord = randomWords[Math.floor(Math.random() * 25)]
game.splash("Press A to guess a letter and press B to guess a word.")
numLetters = secretWord.length
numGuesses = 5
progressMessage = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
attempts = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
message = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 0)
scene.setBackgroundColor(1)
startGame()
forever(function () {
    progressMessage.say(progress)
    attempts.say("Attempts: " + numGuesses)
    if (numGuesses == 0) {
        game.over(false)
    } else if (!(progress.includes("_"))) {
        game.over(true)
    }
})
