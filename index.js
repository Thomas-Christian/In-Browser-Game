let playerLocation = 0

let playerHealth = 100

const options = [

    optionOne = {
        yes: function() {
            playerHealth = (playerHealth - 10)
            healthNumber.innerHTML = playerHealth
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
        }, 
        prompt: "You come across a bandit, do you attempt to fight them off?"
    },

    optionTwo = {
        yes: function() {
            playerHealth = (playerHealth - 20)
            healthNumber.innerHTML = playerHealth
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
        }, 
        prompt: "You come across a river, do you try to cross?"
    }, 

    optionThree = {
        yes: function() {
            playerHealth = (playerHealth - 20)
            healthNumber.innerHTML = playerHealth
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
        },
        prompt: "You come across a mountian lion, do you try to scare it off?"
    },

    optionFour = {
        yes: function() {
            playerHealth = (playerHealth + 10)
            healthNumber.innerHTML = playerHealth
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
        }, 
        prompt: "You come across an enticing berry bush, will you eat some?"
    }, 

    optionFive = {
        yes: function() {
            playerHealth = (playerHealth)
            healthNumber.innerHTML = playerHealth
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
        }, 
        prompt: "You come across a rickety bridge, do you cross it"
    }, 
]

const locations = [

    scottsbluff = {
        top: '-19.25em',
        left: '6.35em'
    },

    casper = {
        top: '-22em',
        left: '2.1em'
    },

    twinFalls = {
        top: '-23.45em',
        left: '-11.7em'
    },

    pendleton = {
        top: '-32em',
        left: '-17.2em'
    },

    portland = {
        top: '-33.5em',
        left: '-23.3em'
    }
]

// different options 
async function setPromptText() {
    document.getElementById("yes_no_Prompt").innerHTML = options[Math.floor(options.length * Math.random())].prompt;
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

    healthNumber.innerHTML = playerHealth

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

    

