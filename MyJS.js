let CompMove = '';

function ComputerMove() {
  
const Randomizer = (Math.random());

 if(Randomizer >= 0 &&  Randomizer <1/3 )
 {
  CompMove = 'scissors';
 } else if (Randomizer >=1/3 && Randomizer <2/3)
 {
  CompMove = 'paper';
 }else if(Randomizer >= 2/3 && Randomizer <1)
 {
  CompMove = 'rock';
 }
 return CompMove;
}

let result = '';

score = {
 Wins:  0,
 Losses: 0,
 Ties: 0
};

function PlayaMove(PlayerMove) 
{ 
const CompMove = ComputerMove();
  
if(PlayerMove === 'scissors')
{ 
  if(CompMove === 'scissors'){
    result = 'Its a Tie!';
  }else if (CompMove === 'rock'){
    result = 'You Win!';
  }else if(CompMove ==='paper'){
    result = 'You Lose!';
  }
}
else if(PlayerMove === 'rock')
{ 
  if(CompMove === 'scissors'){
    result = 'You Win!';
  }else if (CompMove === 'rock'){
    result = 'Its a Tie!';
  }else if(CompMove === 'paper'){
    result = 'You Lose!';
  }
}
else if(PlayerMove === 'paper')
{ 
  if(CompMove === 'scissors'){
    result = 'You Lose!';
  }else if (CompMove === 'rock'){
    result = 'You Win!';
  }else if(CompMove ==='paper'){
    result = 'Its a Tie!';
  }
}

alert(`You pick: ${PlayerMove}, Computer pick: ${CompMove} and ${result}`);


}

const tempInput = document.getElementById('Tinput');
const tempEnter = document.getElementById('Benter');

//tempEnter.addEventListener('click',() => { 
 // const tempEvent = tempInput.value; 
 // console.log(tempEvent);});

// For pop up
/*let name = prompt("Please tell me your name");

let names = (name);
 document.getElementById("Tinput").value = names;

*/
//let name = prompt("Please tell me your name");
//let names = (name);

let dialog = document.getElementById("myPopup");
document.getElementById("popupMessage").innerText = `Hello, ${names}!`;

// Shows the popup with centered text
dialog.showModal();

function closePopup() {
  dialog.close();
}