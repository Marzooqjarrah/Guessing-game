'use strict'

let username= prompt('what is your name?   ');
alert ('welcome  '+username+ '  lets play a guessing game');

let job= prompt('are you a doctor?   ');
job=job.toLowerCase();
if (job =='yes'|| job =='y')
{
    // console.log(job);
alert('woow you are correct');
}
else if ( job =='no'||job =='n')
{
    alert('sorry, just for doctors');
}

let earth= prompt('does the earth is flat?   ');
earth=earth.toLowerCase();
if (earth =='yes'|| earth =='y')
{
    // console.log(earth);
alert('that is incorrect');
}
else if (earth =='no'||earth =='n')
{
    alert('that is correct');
}

let hen= prompt('does the hen fly?   ');
hen=hen.toLowerCase();
if (hen =='yes'|| hen =='y')
{
    // console.log(hen);
alert('that is incorrect');
}
else if (hen =='no'||hen =='n')
{
    alert('that is correct');
}

alert('thanks for playing  '+ username);