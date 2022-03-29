
var letterCount = 0;
var row = 0;
var outaLength = 0;
var posCheck = 0;
var guess = "";
var wordToGuess;
var won = 0;
var wordBank = ["HABE","SIND", "VIEL","SEHR","GEGANGEN","MEHR",];
var bankPos = Math.floor(Math.random()*wordBank.length);
window.addEventListener("load", chooseWord);
function chooseWord(){
    wordToGuess = wordBank[bankPos]
    console.log(wordToGuess);
    return wordToGuess.toString();
}
function addLetter(e)
{
    if(outaLength < wordToGuess.length && won == 0)
    {
    document.getElementById(letterCount).innerHTML = e.target.id
    letterCount ++
    outaLength ++
    console.log(outaLength)
    guess = guess + e.target.id
    console.log(guess)
    }
}
function removeLetter()
{
    if(outaLength > 0 && won == 0)
    {
        document.getElementById(letterCount -1).innerHTML = null
        letterCount --
        outaLength --
        console.log(outaLength)
        guess = guess.substring(0,outaLength)
        console.log(guess)
        console.log(letterCount)
    }
}
function checkWord()
{
    if(outaLength == wordToGuess.length)
    {
        for(let posCheck = 0; posCheck < wordBank[bankPos].length; posCheck++)
        {
            if(wordToGuess.includes(guess.charAt(posCheck)))
            {
                if( (wordToGuess.includes(guess.charAt(posCheck))))
                {
                    document.getElementById(letterCount - (wordBank[bankPos].length - posCheck)).style.backgroundColor = "#d6ce31"
                }

                if(wordToGuess.charAt(posCheck) == guess.charAt(posCheck))
                {
                    document.getElementById(letterCount - (wordBank[bankPos].length - posCheck)).style.backgroundColor = "green"
                }
            }
        }
        if(wordToGuess == guess)
        {
            won = 1
        }
    outaLength = 0
    guess = ""
    }
}