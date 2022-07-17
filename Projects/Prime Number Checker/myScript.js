let i = 1;

document.getElementById("par").innerHTML = i;

function add() {
  i++;
  document.getElementById("par").innerHTML = i;
}

function minus() {
  i--;
  document.getElementById("par").innerHTML = i;
}

function reset() {
  i=0;
  document.getElementById("par").innerHTML = 0;
}

const prompt = document.getElementById("prompt");

prompt.oninput = function() {
  document.getElementById("output").innerHTML = "loading...";
  prime = checkPrime(prompt.value);
  document.getElementById("output").innerHTML = prime
}

function checkPrime(number){
  number = Math.round(number)
  if (number == 1 || number == 0) {return `${number} is NOT a prime`}
  var primeState = "True"
  for(i=2;i<=Math.sqrt(number);i++){
      if(number % i == 0){
          primeState = "False"
      }
  }
  if(primeState == "True"){
    console.log(`${number} is a prime`) 
    var response = (`${number} is a prime`) 
  }
  else{
    console.log(`${number} is NOT a prime`)
    var response = (`${number} is NOT a prime`) 
  }
  return response
}


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const projectButton = document.getElementsByClassName('project-button')[0]
const projectLinks = document.getElementsByClassName('projects')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

projectButton.addEventListener('click', () => {
  projectLinks.classList.toggle('active')
})