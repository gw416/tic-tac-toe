let buttons = document.querySelectorAll(".btn_option");
let board = ["", "", "", "", "", "", "", "", ""];
let message = document.getElementById("message");
let popup = document.getElementById("popup");
let restart = document.getElementById("restart").addEventListener("click", restartGame);
let current_player = "X";
let game_over = false;
let user__count1 = document.getElementById("user__count1");
let user__count2 = document.getElementById("user__count2");
let count1 = 0;
let count2 = 0;
// button event listeners
for(let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", function() {
        main(btn);
    })
}


/*
-----------------------------------------
-- START of Game code
--
-- Created: February 20th 2023
--
-- TODO:
-- 1) Add which Players Turn it is
-- 2) Add Modal for Start and New Game Screens
-- 3) Add Hover style for all components
-- 4) Add Computer player
--
*/
function main(btn){
    //console.log("current_player: " + current_player)
    //console.log("btn.id: " + btn.id)

    btn.innerHTML = current_player;
    board[btn.id - 1] = current_player;
    check();
    change_player();
}

function change_player(){
    if(current_player == "O") {
        current_player = "X";
    } else {
        current_player = "O";
    }
}

function check(){
    check_horizontal();
    check_vertical();
    check_diagonal();
    check_draw();
}

function check_horizontal(){
    if(allEqual([board[0], board[1], board[2], current_player]) || allEqual([board[3], board[4], board[5], current_player]) || allEqual([board[6], board[7], board[8], current_player])) { 
        message.innerHTML = current_player + " is the winner!";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } 
}

function check_vertical(){
    if(allEqual([board[0], board[3], board[6], current_player]) || allEqual([board[1], board[4], board[7], current_player]) || allEqual([board[2], board[5], board[8], current_player])) { 
        message.innerHTML = current_player + " is the winner!";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } 
}

function check_diagonal(){
    if(allEqual([board[0], board[4], board[8], current_player]) ||  allEqual([board[2], board[4], board[6], current_player])) { 
        message.innerHTML = current_player + " is the winner!";
        popup.classList.remove("hide");
        count_points();
        game_over = true;
    } 
}

function check_draw(){
    let check_if_exists = board.includes("");
    if(allEqual(board) == false && check_if_exists == false) {
        if(game_over != true) {
            message.innerHTML = "Draw!";
            popup.classList.remove("hide");
            game_over = true;
        }
    }

}

function allEqual(arr){
    const setVals = new Set(arr);
    return (setVals.size == 1);
}

function restartGame(){
    popup.classList.add("hide");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = "";
        board[i] = "";
    }
    game_over = false;
}

function count_points(){
    if(current_player == "O") {
        count1 += 1;
        user__count1.innerHTML = count1;
    } else {
        count2 += 1;
        user__count2.innerHTML = count2;
    }
}