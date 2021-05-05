

// One function to handle whatever is thrown 
function thrown_simulation(player_selection) {

    // Simulate a game
    let computer_selection = computerPlay();
    let game_result = playRound(player_selection, computer_selection);

    // Get the current player score
    let current_player_score = parseInt(document.querySelector("#player_score").innerHTML);

    // Get the current computer score 
    let current_computer_score = parseInt(document.querySelector("#computer_score").innerHTML);

    if(game_result.search("win") > 0) {
        current_player_score++;
        document.querySelector("#player_score").innerHTML = current_player_score;
    }
    if(game_result.search("loses") > 0) {
        current_computer_score++;
        document.querySelector("#computer_score").innerHTML = current_computer_score;
    }

    document.querySelector("#outcome").innerHTML = game_result;

    checkScore();
}


// Function to check the score and see if someone hit 5
function checkScore() {

    let player_score = parseInt(document.querySelector("#player_score").innerHTML);
    let computer_score = parseInt(document.querySelector("#computer_score").innerHTML);

    if(player_score == 5) {
        alert("Congralations! You won!");
        document.querySelector("#player_score").innerHTML = 0;
        document.querySelector("#computer_score").innerHTML = 0;
    }

    if(computer_score == 5) {
        alert("Oh no! The computer won!");
        document.querySelector("#player_score").innerHTML = 0;
        document.querySelector("#computer_score").innerHTML = 0;
    }
}




// Function will randomly return "Rock", "Paper", or "Scissors"
function computerPlay() {
    let random_int = Math.floor(Math.random() * 3);
    let result;

    switch (random_int) {
        case 0: result = "Rock";
        break;
    
        case 1: result = "Paper";
        break;
    
        case 2: result = "Scissors";
        break;
    }
    return result;
}

// Function to play a round of RPS
function playRound(playerSelection, computerSelection) {
    let player_lowercase = playerSelection.toLowerCase();
    let computer_lowercase = computerSelection.toLowerCase();

    let player_value;
    let computer_value;

    // Encode the value of the player throw
    switch (player_lowercase) {
        case "rock": player_value = 0;
        break;
    
        case "paper": player_value = 1;
        break;
    
        case "scissors": player_value = 2;
        break;
    }

    // Encode the value of the computer throw
    switch (computer_lowercase) {
        case "rock": computer_value = 0;
        break;
    
        case "paper": computer_value = 1;
        break;
    
        case "scissors": computer_value = 2;
        break;
    }

    let game_result = player_value - computer_value;
    let text_result;
    let verb_result;

    switch (game_result) {
        case 0: text_result = "tie"; verb_result = "ties";
        break;
    
        case -1: text_result = "lose"; verb_result = "loses to";
        break;
    
        case -2: text_result = "win"; verb_result = "beats";
        break;

        case 1: text_result = "win"; verb_result = "beats";
        break;

        case 2: text_result = "lose"; verb_result = "loses to";
        break;
    }

    final_text_to_print = "You " + text_result + "! " + playerSelection + " " + verb_result + " " + computerSelection;

    return final_text_to_print;
}

/* // Function to simulate a game
function game() {
    let player_score = 0;
    let computer_score = 0;

    let player_selection;
    let computer_selection;
    let game_result;

    for(let i = 0; i < 5; i++){
        player_selection = prompt("Enter your throw.");
        computer_selection = computerPlay();
        game_result = playRound(player_selection, computer_selection);
        console.log(game_result);

        if(game_result.search("win") > 0) {
            player_score++;
        }
        if(game_result.search("loses") > 0) {
            computer_score++;
        }
    }

    let overall_score = "Final score: you " + player_score + ", computer: " + computer_score;
    console.log(overall_score);
}

//game(); */