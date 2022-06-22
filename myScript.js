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
  i=0
  document.getElementById("par").innerHTML = 0;
}
