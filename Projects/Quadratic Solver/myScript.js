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

// prompt.addEventListener('keypress', (event)=> {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("output").innerHTML = "loading...";
//     prime = checkPrime(prompt.value);
//     document.getElementById("output").innerHTML = prime
//   }
// })

var inputA = document.getElementById("a")
var inputB = document.getElementById("b")
var inputC = document.getElementById("c")

inputA.oninput = function() {
  if ((inputB && inputB.value) && (inputC && inputC.value)) {
    solutions = quadraticSolve(inputA.value, inputB.value, inputC.value)
    document.getElementById("output").innerHTML = "loading...";
    if (isNaN(solutions[0]) || isNaN(solutions[1])) {
      for (i = 0; i < solutions.length; i++) {
        solutions[i] = 'x = ' + solutions[i];
      }
      document.getElementById("output").innerHTML = solutions.join('&nbsp;&nbsp;&nbsp;&nbsp; ') + "<br><br>This happened because you tried to get the square root of a negative number.<br><br>Hint: Try increasing the value of b."
    }
    else {
      for (i = 0; i < solutions.length; i++) {
        solutions[i] = 'x = ' + solutions[i];
      }
      document.getElementById("output").innerHTML = solutions.join('&nbsp;&nbsp;&nbsp;&nbsp; ')
    }
  }
}

inputB.oninput = function() {
  if ((inputA && inputA.value) && (inputC && inputC.value)) {
    solutions = quadraticSolve(inputA.value, inputB.value, inputC.value)
    document.getElementById("output").innerHTML = "loading...";
    if (isNaN(solutions[0]) || isNaN(solutions[1])) {
      for (i = 0; i < solutions.length; i++) {
        solutions[i] = 'x = ' + solutions[i];
      }
      document.getElementById("output").innerHTML = solutions.join('&nbsp;&nbsp;&nbsp;&nbsp; ') + "<br><br>This happened because you tried to get the square root of a negative number.<br><br>Hint: Try increasing the value of b."
    }
    else {
      for (i = 0; i < solutions.length; i++) {
        solutions[i] = 'x = ' + solutions[i];
      }
      document.getElementById("output").innerHTML = solutions.join('&nbsp;&nbsp;&nbsp;&nbsp; ')
    }
  }
}

inputC.oninput = function() {
  if ((inputA && inputA.value) && (inputB && inputB.value)) {
    solutions = quadraticSolve(inputA.value, inputB.value, inputC.value)
    document.getElementById("output").innerHTML = "loading...";
    if (isNaN(solutions[0]) || isNaN(solutions[1])) {
      for (i = 0; i < solutions.length; i++) {
        solutions[i] = 'x = ' + solutions[i];
      }
      document.getElementById("output").innerHTML = solutions.join('&nbsp;&nbsp;&nbsp;&nbsp; ') + "<br><br>This happened because you tried to get the square root of a negative number.<br><br>Hint: Try increasing the value of b."
    }
    else {
      for (i = 0; i < solutions.length; i++) {
        solutions[i] = 'x = ' + solutions[i];
      }
      document.getElementById("output").innerHTML = solutions.join('&nbsp;&nbsp;&nbsp;&nbsp; ')
    }
  }
}

function quadraticSolve (a, b, c) {
  var discriminant = (Math.pow(b,2)-4*a*c)**(1/2)
  var solutions = [((-b+discriminant)/2*a),((-b-discriminant)/2*a)]
  // for (i = 0; i < solutions.length; i++) {
  //     solutions[i] = 'x = ' + solutions[i];
  // }
  console.log(solutions.join(' '));
  return solutions
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