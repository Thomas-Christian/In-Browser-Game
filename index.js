let playerLocation = 0
var randomIndex 
let playerHealth = 100

var goodAudio = new Audio('assets/8-Bit WIN.wav')
var badAudio = new Audio('assets/8-Bit OUCH.wav')

var options = []

async function initializeOptions() {

    options = [
        
    {
        yes: function() {
            playerHealth = (playerHealth - 10)
            healthNumber.innerHTML = playerHealth
            badAudio.play()
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        }, 
        prompt: "You come across a bandit, do you attempt to fight them off?"
    },

    {
        yes: function() {
            playerHealth = (playerHealth - 10)
            healthNumber.innerHTML = playerHealth
            badAudio.play()
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        }, 
        prompt: "You come across a sleeping snake, do you attempt to sneak around?"
    },

    {
        yes: function() {
            playerHealth = (playerHealth - 20)
            healthNumber.innerHTML = playerHealth
            badAudio.play()
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        }, 
        prompt: "You come across a river, do you try to cross?"
    }, 

    {
        yes: function() {
            playerHealth = (playerHealth - 20)
            healthNumber.innerHTML = playerHealth
            badAudio.play()
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        },
        prompt: "You come across a mountian lion, do you try to scare it off?"
    },

    {
        yes: function() {
            playerHealth = (playerHealth + 10)
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        }, 
        no: function() {
            playerHealth = (playerHealth - 10)
            healthNumber.innerHTML = playerHealth
            badAudio.play()
        }, 
        prompt: "You come across an enticing berry bush, will you eat some?"
    }, 

    {
        yes: function() {
            playerHealth = (playerHealth)
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        }, 
        no: function() {
            healthNumber.innerHTML = playerHealth
            goodAudio.play()
        }, 
        prompt: "You come across a rickety bridge, do you cross it?"
    } 
    ]
}

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

async function removeSelection(deleteMe) {
    options.splice(deleteMe, 1) 
}

// different options 
async function setPromptText() {

    console.log(options)

    let chooseIndex = Math.floor((options.length - 1) * Math.random())
    randomIndex = chooseIndex
    let chosenOption = options[chooseIndex];
    let chosenPrompt = document.getElementById("yes_no_Prompt").innerHTML = chosenOption.prompt

    console.log("CHOSEN OPTION " + chosenOption.prompt)

    await removeSelection(randomIndex)

    // end 
    if(playerLocation == 5)
    {
        document.getElementById("yes_no").style.visibility = "hidden"

        document.getElementById("yes_no_Prompt").innerHTML = "You made it to Oregon with " + playerHealth + " health!"
    }

}

async function handlePlayerResponse(e) {

    console.log(e.srcElement.id)

    if (e.srcElement.id == 'yes') {
        options[randomIndex].yes();
        moveCharacter();

    } else if (e.srcElement.id == 'no'){
        options[randomIndex].no();
        moveCharacter();
        
    } else if (e.srcElement.id == 'play'){
        playGame();
    }

    await setPromptText();
}

let screen = document.getElementById('screen');
let player = document.createElement('img');
let gameScreen = document.getElementById('game');
let playButton = document.getElementById('play');
let yesButton = document.getElementById('yes')
let noButton = document.getElementById('no')

let health = document.getElementById('healthNumber');

playButton.addEventListener('click', handlePlayerResponse);

yesButton.addEventListener('click', handlePlayerResponse);
noButton.addEventListener('click', handlePlayerResponse);

async function playGame() {

    await initializeOptions();

    healthNumber.innerHTML = playerHealth

    playButton.remove();
        
        player.id = 'player'
        player.src='./assets/6888639.png'

        gameScreen.append(player);

        continueJourney();

}

async function moveCharacter() {
    
    player.style.top = locations[playerLocation].top
    player.style.left = locations[playerLocation].left

    playerLocation = (playerLocation + 1)

    console.log(playerLocation)

}

async function continueJourney() {
    
    document.getElementById("objective").remove()
    document.getElementById("yes_no").style.visibility = "visible";
    document.getElementById("health").style.visibility = "visible";
    document.getElementById("yes_no_Prompt").style.visibility = "visible";
}

    

