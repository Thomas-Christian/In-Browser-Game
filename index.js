let playerLocation = 0

const options = [

    optionOne = {

        yes: function() {
            healthNumber.innerHTML = "85"
        }, 

        no: function() {
            healthNumber.innerHTML = "100"
        }, 

        prompt: "You come across a bandit, do you try to fight them off?"

    },

    optionTwo = {
        yes: function() {
            healthNumber.innerHTML = "75"
        }, 

        no: function() {
            healthNumber.innerHTML = "100"
        }, 

        prompt: "You come across a river, do you try to cross?"

    }, 

    optionThree = {
        yes: function() {
            healthNumber.innerHTML = "35"
        }, 

        prompt: "three?"
    }, 
]

const locations = [

    scottsbluff = {
        top: '-21.5em',
        left: '7em'
    },

    casper = {
        top: '-24.6em',
        left: '2.3em'
    },

    twinFalls = {
        top: '-26em',
        left: '-12.7em'
    },

    portland = []
]

// different options 
async function setPromptText() {

    document.getElementById("yes_no_Prompt").innerHTML = options[playerLocation].prompt;

}

function handlePlayerResponse(e) {

    console.log(e.srcElement.id)

    if (e.srcElement.id == 'yes') {
        options[playerLocation].yes();
    } else {
        options[playerLocation].no();
    }
        
    moveCharacter();
}





// play game functions
let screen = document.getElementById('screen');
let player = document.createElement('img');
let gameScreen = document.getElementById('game');
let playButton = document.getElementById('play');
let yesButton = document.getElementById('yes')
let noButton = document.getElementById('no')

let health = document.getElementById('healthNumber');

playButton.addEventListener('click', playGame);

yesButton.addEventListener('click', handlePlayerResponse);
noButton.addEventListener('click', handlePlayerResponse);



    
async function playGame() {

    playButton.remove();
        
        player.id = 'player'
        player.src='./assets/6888639.png'

        gameScreen.append(player);

        continueJourney()
}

async function moveCharacter() {
    
    player.style.top = locations[playerLocation].top
    player.style.left = locations[playerLocation].left

    playerLocation = (playerLocation + 1)

    console.log(playerLocation)

    await setPromptText();

}

async function continueJourney() {

    document.getElementById("yes_no").style.visibility = "visible";
    document.getElementById("yes_no_Prompt").style.visibility = "visible";

    setPromptText();

}

    

