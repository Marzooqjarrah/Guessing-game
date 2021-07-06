'use strict'

let username = prompt('what is your name?   ');
alert('welcome  ' + username + '  lets play a guessing game');
let score=0;
let job = prompt('am i a doctor?   ');
job = job.toLowerCase();
if (job == 'yes' || job == 'y') {
    // console.log(job);
    alert('woow you are correct');
    score++;
}
else if (job == 'no' || job == 'n') {
    alert('sorry, just for doctors');
}

let earth = prompt('does the earth is flat?   ');
earth = earth.toLowerCase();
if (earth == 'yes' || earth == 'y') {
    // console.log(earth);
    alert('that is incorrect');
    score++;
}
else if (earth == 'no' || earth == 'n') {
    alert('that is correct');
    score++;
}

let hen = prompt('does the hen fly?   ');
hen = hen.toLowerCase();
if (hen == 'yes' || hen == 'y') {
    // console.log(hen);
    alert('that is incorrect');
    
}
else if (hen == 'no' || hen == 'n') {
    alert('that is correct');
    score++;
}

let favclub = prompt('is my facourite club is Real madid?   ');
favclub = favclub.toLowerCase();
if (favclub == 'yes' || favclub == 'y') {
    // console.log(favclub);
    alert('that is incorrect');
    
}
else if (favclub == 'no' || favclub == 'n') {
    alert('that is correct');
    score++;
}

let favmeal = prompt('is my facourite meal is Mansaf?   ');
favmeal = favmeal.toLowerCase();
if (favmeal == 'yes' || favmeal == 'y') {
    // console.log(favmeal);
    alert('that is incorrect');
    
}
else if (favmeal == 'no' || favmeal == 'n') {
    alert('that is correct');
    score++;
}


let guessanum = prompt(' Guess a number between 1-10 ');
for (let i = 0; i < 3; i++) {
    if ( guessanum == 5) {
        alert ('nice! you are correct');
        score++;
        break;
         
    }
        
    else if (guessanum > 5) {
        alert('too high');
         guessanum = prompt(' Guess a number between 1-10 ');
           
    }
    else if (guessanum < 5) {
        alert('too low');
         guessanum = prompt(' Guess a number between 1-10 ');
            
    }
}
    alert('the correct answer is 5');



     let food= ['shawarma', 'mansaf','burger','kabsah','zinger','pizza'];
             
     let favfood= prompt('what is your favourite food?  ');
     for (let i = 0; i < 5; i++){
         let status= true;
         for( let j=0; j<food.length;j++){
             if (favfood==food[j])
             {
                 alert('great job');
                 status=false;
                 score++;
                 break;
             }
         }
                        
             if (status==true){
                 alert('try again');
                 favfood= prompt('what is your favourite food?  ');
                 
             }
             else {
                 break;
             }
                 
             
     }
      console.log(food);



console.log('your score is', score);
alert('thanks for playing  ' + username);