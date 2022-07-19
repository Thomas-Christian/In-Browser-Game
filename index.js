var options = [
    "Mehhoy",
    "beep",
    "blah"
]

let randomElement = options[1]


// different options 
async function setPromptText(randomElement) {

    //await pickOption()
    document.getElementById("yes_no_Prompt").innerHTML = randomElement;

}



// play game functions
let screen = document.getElementById('screen');
let player = document.createElement('img');
let gameScreen = document.getElementById('game');
let playButton = document.getElementById('play');

playButton.addEventListener('click', playGame);
    
async function playGame() {

    playButton.remove();
        
        player.id = 'player'
        player.src='./assets/6888639.png'

        gameScreen.append(player);

        continueJourney()

}

async function continueJourney() {

    document.getElementById("yes_no").style.visibility = "visible";
    document.getElementById("yes_no_Prompt").style.visibility = "visible";

    setPromptText();

}

    

