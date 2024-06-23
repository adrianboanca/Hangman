const wordList = ["PROGRAMMING", "WELLCODE", "SCARECROW", "FOOTBALL"];
const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
let Life = 7;
const guessedLetter = [];
let Gameover = false;
const wordContainer = document.getElementById('word-container');
const Letters = document.getElementById('letters');
const Message = document.getElementById('message');
const Lives = document.getElementById('lives');

function displayWord(){
    let display = '';
    for(let letter of randomWord){
        if(guessedLetter.includes(letter)){
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    wordContainer.textContent = display.trim();
}

function checkLives() {
    Lives.textContent = `Remaining Lives: ${Life}`;
}

function checkWin() {
    if(!wordContainer.textContent.includes('_')){
       Message.textContent = "Congratulations, you have won!";
       Gameover = true;
    }
}

function checkLose() {
    if(Life <= 0){
        Message.textContent = `Unfortunately, you have lost! The word was: ${randomWord}`;
        Gameover = true;
    }
}

function generateLetters() {
    for (var i = 65; i <= 90; i++) {
        let c = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = c;
        button.onclick = () => guessedLetters(c);
        Letters.appendChild(button);
    }
}

function guessedLetters(letter){
    if (guessedLetter.includes(letter) || Life <= 0 || Gameover) return;
    guessedLetter.push(letter);

    if (randomWord.includes(letter)) {
        displayWord();
        checkWin();
    } else {
        Life--;
        checkLives();
        checkLose();
    }
}

displayWord();
checkLives();
generateLetters();