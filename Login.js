 //LOGING
 
 function Logging(show)
 {
  const Popping = document.getElementById('LoginPage');

  if(show)
  {
    Popping.style.display = 'block';

  }else {
    Popping.style.display = 'none';
  }
 }

const Log = document.getElementById('LoginPage');
const print = document.getElementById('output');


Log.addEventListener('submit', function(event)
{event.preventDefault();
  
const User = document.getElementById('Username').value;
const Pass = document.getElementById('Password').value;

print.innerHTML = ` <br >Username: ${User} <br> Password: ${Pass}`;

let thr = document.getElementById('Username').value='';
let sdse = document.getElementById('Password').value='';

setTimeout(() => {  
print.innerHTML = '';
}, 5000);
}); 


// THIS IS FOR HOVER SIDE
/*
const hover = document.querySelector(".Hover1");
const about = document.querySelector(".AboutBackground");

hover.addEventListener("mouseenter", () => {
    about.style.display = "block";
});

hover.addEventListener("mouseleave", () => {
    about.style.display = "none";
});
// Lets getb stared

*/
