let i = 1;

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

document.getElementById("par").innerHTML = i;
const addButton = document.getElementById("add")
const resetButton = document.getElementById("reset")
const minusButton = document.getElementById("minus")

addButton.addEventListener('click', (event)=> {
  add()
})

resetButton.addEventListener('click', (event)=> {
  reset()
})

minusButton.addEventListener('click', (event)=> {
  minus()
})

const prompt = document.getElementById("prompt");

prompt.addEventListener('keypress', (event)=> {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("output").innerHTML = "loading...";
    api(prompt.value)
        .then(response => {
        document.getElementById("output").innerHTML = response;
        });
//    document.getElementById("output").innerHTML = "This function is still in production...<br> come back later";
  }
})

const api = async function(prompt) {
  const { Configuration, OpenAIApi } = require("openai");
  key = "sk-HSowNjhUsbERaLBznV1dT3Bl" + "bkFJ27FDLWkJ1AkSVEe7yYg1"

  const configuration = new Configuration({
    apiKey: key,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.7,
    presence_penalty: 0.7,
  });

  console.log("The following log is the parsed response from the API")
  parsed = response.data.choices[0].text
  console.log(parsed)
  return parsed
//  document.getElementById("output").innerHTML = response
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
