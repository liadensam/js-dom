/*
GAME RULES:

- The game has two players who switch rounds.
- Every round each player rolls the dice how many times the player wants. Every value thrown is added to the points in the round.
- If the player throws number one on the dice, looses points in that round and the next player is on the move.
- The player can choose "Enough", which means that all her/his points played in that round will be added to his whole score. Then the next player is on the move.
- The game ends when one of the players reach the final score.

*/

//declarations of the global variables

//variable for score of both players
let score;

//score for the round
let scoreInRound;

//active player - variable, which holds a number of a current player being currently on the move
let activePlayer;

//variable, where we keep the value just thrown on the dice
let dice;

//value, which player has to reach in order to end the game
let endScore;

//variable, which controls if the game is running
let gameRuns;

//here we call the inicializing function as done at the bottom of the code
init();


//now we need to assign values to this variables

//array in which twi values are going to be values  and , because both players will begin the game with zero points
// score = [0, 0];

//at the beginning of each round will be zero, and then numbers thrown on the dice will be added
// scoreInRound = 0;

/*player, which is currently on the move-there will be  0 or 1 depending which player, because of the index. With the help of the index we will use the value of the score - score = [0, 0] and first value of the index is first value of the score and the seconds value is the second value of the score.*/
// activePlayer = 0;

//the end of the game is when one of the players each 25 points, it is set to 25, so when we test the game, we will not wait forever 
// endScore = 25;


/*It is a random number from 1 to 6 on a dice, we will need a library Math with its function random. If we try it out, we see it return values in decimal from 0 till 1.*/

/*
dice = Math.random();
console.log(dice);
*/

/*so we need to multiply the number so it will be in an interval from 1 to 6 and make it a whole number not decimal.
By multiplying by 6, it will give us decimal number up to six but without the six as it never return one this function. */
// dice = Math.random() * 6;

//now we need to make it whole numbers and use floor for the decimal value round down
// dice = Math.floor(Math.random() * 6);

//now we have number with 0, but without 6. so we just need to move it one number up, so +1.
// dice = Math.floor(Math.random() * 6) + 1;





/*At the begging of the new game we want elements displaying any points to be reset (zero). Get element by ID takes the text chain, which we are searching for.*/
//we have got the element within the ID, se we can set it up to the reset value.
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';

// document.getElementById('actual-0').textContent = '0';
// document.getElementById('actual-1').textContent = '0';





//now we want the numbers to appear in our boxes for point for the current player. Our box has id = "actual-0"
/*as we place the id, instead of the number, we want current active player in the move, so we add the variable activePlayer. This tags the element we would like to be changing. After that we can add to it the value on the dice which has just been rolled by the active player.*/
// document.querySelector('#actual-' + activePlayer).textContent = dice;

/*We create query selector for the number showing the last number rolled on a dice, do not forget the dot in front of it as it is a class. We use style and set the display as none. So at the beginning of the new game it will not be displayed as no dice was rolled.*/
document.querySelector('.dice').style.display = 'none';




/*Now we need to write a formula for a number on the dice rolled to be displayed.*/


/*we need to get element where we have a clicking event, in this case throwing a dice. We can add there event listener, which takes two arguments, one is the type of the action (on this case - click) and the other one is the fucntion which starts running when it catches the event. I am using anonymous function, which is called once.*/
document.querySelector('.button-throw').addEventListener('click', function() {
    //when the game is running so it is true this will happen
    if (gameRuns) {
        /* 1 - we want to get random number which is when we throw the dice. 
        We do not want to run the dice directly at the beginning, but after the player clicks on the button.*/
        dice = Math.floor(Math.random() * 6) + 1;

        // 2 - showing the result in the game
        //we need to get the box showing the number thrown on the dice
        //in the dice there will be the element from DOM not the value directly
        let diceDOM = document.querySelector('.dice');

        /*now we need to display the number thrown, so above we set to .dice display none, now when someone click on the button it will display so we set it up as block*/
        diceDOM.style.display = 'block';

        /*We need to display text content to the div dice, we need the correct number thrown. We made this above, so we paste it here. But we put there diceDOM, because we want to place the number thrown just in the middle between those players not in the score board. So on this stage if I click on the button throw a dice, it will show numbers thrown on the display in the middle but not in the score board yet.*/
        diceDOM.textContent = dice;

        /*3 - we need to actualize score of the round if number 1 was thrown on the dice or in the other case if it was not thrown. So we have to situation here.*/
        //dice je promenna ve ktere se nam uklada nase nahodne cislo hodu na kostce
        if (dice !== 1) {

        /*pricti body. We want to add points to the points previous gained. They will be shown in the score board.*/
            scoreInRound += dice;
      
            /*we need to dsplay the points in the score board, so we need to find the element of the player showing points. We need to find both score board as each player has own one with unique ID. And then we change the element's text content. We will make it universal so we add the active player to it so there will be either 0 or 1 depending on which player is on the move. So according to that the correct element will be selected (the correct scoe board for the correct player). The text content will be than changed into the points in the round added to the score.*/
            document.querySelector('#actual-' + activePlayer).textContent = scoreInRound;
        } else {
            //prepni hrace
            /* If active player Player 1, so we switch to the player 2. Else the other way.*/
            /*
            if (activePlayer === 0) {
                activePlayer = 1
            } else {
                activePlayer = 0
            }
            */

            /* We can make it more cleaner with a ternary operator doing the same statement. Question mark states that on the left side of it is the condition we are asking. On the right side from the question mark is what will happen if the condition on the right side is met. Else part is the one using : so everything after that is gonna happen if the condition is not met. */
            // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      
            /*we need to set the points in the round to zero so when the 1 is rolled, the players points will be deleted. We need to display thame on the board not just in the script so we need to change content of the score board box.*/
            // scoreInRound = 0;

            //so whenever player rolls 1 on a dice in the round, it will null the score and it counts for both players
            // document.getElementById('soucasne-0').textContent = '0';
            // document.getElementById('soucasne-1').textContent = '0';

            /*we want to change the style of the current player playing (the background and the dot). We will use toggle, because we want to switch the class active. We need to do it for both players.*/
            // document.querySelector('.hrac-0-panel').classList.toggle('aktivni');
            // document.querySelector('.hrac-1-panel').classList.toggle('aktivni');

            /*this whole process can be made easier using DRY prnciple, not to repeat a function on multiple spots in a code but to use function and call it so all these code above we insert into a function at the bottom of a code and name it nextPlayer() and we call it here.*/
            nextPlayer();
        }
    }
});


/*now we are working with the event when player clicks on the button enough. */
document.querySelector('.button-enough').addEventListener('click', function() {
    //when the game is running so it is true this will happen
    if (gameRuns) {
        //add current point to the total points of the player
        /*We need to get the points for the player we want, to we access body with index showing the active player. To that index we add points the player got in the round.*/
        score[activePlayer] += scoreInRound;

        /*aktualizovat UI, to display points (not just be in our script), to rewrite the number below text Player1 or Player 2 if the player press enough and would like to keep the points. Again, this to be universal when we select the id, we delete the number beheind - and add + activePlayer. We create text content to input points the player on the move played. */
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]

        /*check if the player has won, change the name of the class for the player who is the winner. Then we need to remove the class of active player. Again we make it universal for both players. Then to the same player we need to add class winner.*/
        if (score[activePlayer] >= endScore) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.dice').style.display = "none";

            //if someone is a winner than we want the game to stop so the button are no longer active. until someone hit the button new game.
            gameRuns = false;
        } else {
          /*switch players, so when the player clicks on the enough button, his/her move ends and the other player is on the move. We can copy it from the previous event. In order to follow DRY principle, to not repeat a piece of code on different places we will insert this into a function.*/
          nextPlayer();
        }
    }
  
});

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  scoreInRound = 0;

  document.getElementById('actual-0').textContent = '0';
  document.getElementById('actual-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}



//if we click on this button we want the setting to be as at the beginning state
document.querySelector('.button-new').addEventListener('click', init);

//inicializacni funkce
//this function we will call also at the beginning fo the code
//as this code is used more times we will insert it in the function
function init() {
  //vynulovat vsechny promenne a dat vedet pri jakem poctu bodu hra konci
  score = [0, 0];
  activePlayer = 0;
  scoreInRound = 0;
  endScore = 25;
  gameRuns = true;

  //vypneme zobrazeni hodu
  document.querySelector('.dice').style.display = 'none';

  //ted to musime udelat v uzivatelskem prostredi, at to vidime
  //as we copy a part of code already done above we will use again function init() (DRY principle)
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('actual-0').textContent = '0';
  document.getElementById('actual-1').textContent = '0';

  //vsechny texty a tridy uvest do puvodniho stavu
  document.querySelector('#name-0').textContent = "Player 1";
  document.querySelector('#name-1').textContent = "Player 2";

  /*removing classes to be as at the beginning so it is ready at its set up how it was. The player 1 is the one starting so we add him/her the class of active player.*/
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}



/* Here is the code just by itself without comments:

let score;
let scoreInRound;
let activePlayer;
let dice;
let endScore;
let gameRuns;

init();

document.querySelector('.dice').style.display = 'none';

document.querySelector('.button-throw').addEventListener('click', function() {
    if (gameRuns) {
        dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.textContent = dice;
        if (dice !== 1) {
            scoreInRound += dice;
            document.querySelector('#actual-' + activePlayer).textContent = scoreInRound;
        } else {
          nextPlayer();
        }
    }
  
});


document.querySelector('.button-enough').addEventListener('click', function() {

    if (gameRuns) {
        score[activePlayer] += scoreInRound;
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]

        if (score[activePlayer] >= endScore) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.dice').style.display = "none";
            gameRuns = false;
        } else {
          nextPlayer();
        }
    }
  
});


function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  scoreInRound = 0;

  document.getElementById('actual-0').textContent = '0';
  document.getElementById('actual-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}




document.querySelector('.button-new').addEventListener('click', init);

function init() {

  score = [0, 0];
  activePlayer = 0;
  scoreInRound = 0;
  endScore = 25;
  gameRuns = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('actual-0').textContent = '0';
  document.getElementById('actual-1').textContent = '0';

  document.querySelector('#name-0').textContent = "Player 1";
  document.querySelector('#name-1').textContent = "Player 2";

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');
}

*/