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