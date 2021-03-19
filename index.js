const joke = document.getElementById('joke');
const answer = document.getElementById('answer');

const btn = document.getElementById('generator');
const content = document.getElementById('joke-content');

let responseAnswer;

async function getJokes() {
      try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const data = await response.json();
            responseAnswer = data;
      } catch (error) {
            console.log(error);
            content.innerHTML = "Please Check your internet connection"
      }
}
getJokes();
btn.addEventListener("click",
      (e) => {

            getJokes();



            joke.innerHTML = responseAnswer.setup
            answer.innerHTML = responseAnswer.punchline

      }
)
