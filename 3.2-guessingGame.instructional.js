// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS


let tries = 3
let guess = 0
let min = 1
let max = 10
let answer = Math.floor(Math.random() * (max-min + 1)) + min
console.log(answer)


guess = window.prompt("I'm thinking of a number between 1 and 10... Go on, guess what it is!")


    
       
        parseInt(guess)
        

        for(i = 1; i <= answer; i++){
         
            if(guess < 1 || guess > 10){
                
                alert(`What a goof! I said to guess a number between 1 and 10 and you guessed ${guess}`)
            }
            
            if (guess == answer){
                 alert('You got it! I knew you would!')
                break;

            } else if (guess < answer) {
               
                tries--
                guess = prompt(`${guess} is too low, friend. ${tries} remaining`)
                
            } else if (guess > answer){
                
                tries--
                guess = prompt(`${guess} is too high, pal. ${tries} remaining`)
                
            } 
            
            if (tries == 0){
                guess = alert('Sorry, no more guesses, buddy. Great try though!')
                break;
            }   
        }
    

