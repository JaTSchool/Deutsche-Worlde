//Initial code by Heidi Pluska, modified code by Joseph Thomson. Modifications made mostly to the "makeLetterBoxes" function

//drawRectangle recycled from previous lab
function drawRectangle(w, h, x, y, color){
    var rectangle = document.createElement("div"); 
    rectangle.style.position = "absolute"; 
    rectangle.style.width = w + "px"; 
    rectangle.style.height = h + "px"; 
    rectangle.style.left = x + "px"; 
    rectangle.style.top = y + "px"; 
    rectangle.style.backgroundColor = color; 
    document.body.appendChild(rectangle); 
    return rectangle;
}
drawRectangle(1350, 200, 0, 76, "black");
drawRectangle(1350, 200, 0, 276, "red");
drawRectangle(1350, 200, 0, 476, "yellow");
document.body.style.backgroundColor = "Black";
var letterBox;
var letterBoxWidth = 50;
var letterBoxHeight = 50;
var letterBoxSpacing = 55;
var letterButton;
var letterButtonWidth = 30;
var letterButtonHeight = 40;
var letterButtonSpacing = 35;
var firstRowLetterButtons = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
var secondRowLetterButtons = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var thirdRowLetterButtons = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"];
var title = document.createElement("h1");
title.innerHTML = "Deutsche Wordle";
title.style.color = "white";
title.style.textAlign = "center";
title.style.borderBottom = "thin gray solid";
title.style.paddingBottom = ".5em";
document.body.append(title);
var letterDiv = document.createElement("div");
letterDiv.style.margin = "auto";
letterDiv.style.width = letterBoxSpacing*5 + "px";
letterDiv.style.position = "relative";
document.body.append(letterDiv);
var buttonDiv = document.createElement("div");
buttonDiv.style.margin = "auto";
buttonDiv.style.position = "relative";
buttonDiv.style.top = letterBoxSpacing * 6 + 25 + "px";
buttonDiv.style.width = letterButtonSpacing*firstRowLetterButtons.length + 50+ "px";
buttonDiv.style.height = 210 + "px";
document.body.append(buttonDiv);
buttonDiv.style.border = "green thin solid";
buttonDiv.style.backgroundColor = "black";
function makeLetterBox(letter, xPos, yPos, id){
    letterBox = document.createElement("div");
    letterBox.style.position = "absolute";
    letterBox.style.left = xPos + "px";
    letterBox.style.top = yPos + "px";
    letterBox.style.width = letterBoxWidth + "px";
    letterBox.style.height = letterBoxHeight + "px"
    letterBox.style.border = "gray thin solid";
    letterBox.style.backgroundColor = "black"
    letterBox.style.color = "white";
    letterBox.style.fontFamily = "Arial, sans-serif";
    letterBox.style.textAlign = "center";
    letterBox.style.fontSize = "2.8em";
    letterBox.style.fontStyle = "bold";
    letterBox.innerHTML = letter;
    letterBox.id = id;
    letterDiv.append(letterBox);
}
 function makeLetterButton(letter, xPos, yPos, id, w, type){
    letterButton = document.createElement("div");
    letterButton.style.position = "absolute";
    letterButton.style.left = 5 + xPos + "px";
    letterButton.style.top = 5 + yPos + "px";
    letterButton.style.width = w + "px";
    letterButton.style.height = letterButtonHeight + "px"
    letterButton.style.backgroundColor = "gray";
    letterButton.style.color = "white";
    letterButton.style.fontFamily = "Arial, sans-serif";
    letterButton.style.borderRadius = "10%";
    letterButton.innerHTML = letter;
    letterButton.id = id;
    letterButton.style.textAlign = "center";
    letterButton.style.paddingTop = "20px";
    letterButton.style.paddingBottom = "0px";
    letterButton.style.cursor = "pointer";
    if(type == "letter"){
        letterButton.addEventListener("click", addLetter);
    }
    if(type == "delete"){
        letterButton.addEventListener("click", removeLetter);
    }
    if(type == "enter"){
        letterButton.addEventListener("click", checkWord);
    }
    buttonDiv.append(letterButton);
}
//
function makeLettersBoxes(){
    var id = 0; 
    for(var rows = 0; rows < 6; rows++){
        for(var cols = 0; cols < wordBank[bankPos].length; cols++){        
            var x = (cols * letterBoxSpacing) - (55 * (wordBank[bankPos].length -5))/2  
            var y = rows*letterBoxSpacing
            makeLetterBox("", x, y, id)
            id++
        }
    }      
}
function makeFirstRowLetterButtons(){
    var rows = 0;
    for(var cols = 0; cols < firstRowLetterButtons.length; cols++){
        var id = firstRowLetterButtons[cols];
        var x = 25+cols*letterButtonSpacing;
        var y = rows*letterButtonSpacing;
        makeLetterButton(firstRowLetterButtons[cols], x, y, id, letterButtonWidth, "letter");
    }
}
function makeSecondRowLetterButtons(){
    var rows = 1;
    for(var cols = 0; cols < secondRowLetterButtons.length; cols++){
        var x = 40+cols*letterButtonSpacing;
        var y = 35+rows*letterButtonSpacing;
        var id = secondRowLetterButtons[cols];
        makeLetterButton(secondRowLetterButtons[cols], x, y, id, letterButtonWidth, "letter");
    }
}
function makeThirdRowLetterButtons(){
    var rows = 2;
    for(var cols = 0; cols < thirdRowLetterButtons.length; cols++){
        var w;
        var type = "letter"; 
        var id = thirdRowLetterButtons[cols];
        x = cols*letterButtonSpacing;
        var y = 70+rows*letterButtonSpacing;
        if(cols == 0 || cols == thirdRowLetterButtons.length - 1){
            
            w = letterButtonWidth + 40;
            type = "enter";
            if(cols == thirdRowLetterButtons.length - 1){
                x = cols*letterButtonSpacing+40; 
                type = "delete";
            }
        }else{
            w = letterButtonWidth;
            x = cols*letterButtonSpacing+40;
        }
        makeLetterButton(thirdRowLetterButtons[cols], x, y, id, w, type); 
    }
}

//Makes Buttons
makeLettersBoxes();
makeFirstRowLetterButtons();
makeSecondRowLetterButtons();
makeThirdRowLetterButtons();
