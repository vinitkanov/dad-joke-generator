const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Function to fetch and display a joke
async function generateJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com', {
            headers: { 'Accept': 'application/json' }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        
        const data = await response.json();
        jokeEl.innerText = data.joke;
    } catch (error) {
        jokeEl.innerText = 'Oops! Something went wrong.';
        console.error(error);
    }
}

// Load a joke when the page loads
generateJoke();

// Fetch a new joke when the button is clicked
jokeBtn.addEventListener('click', generateJoke);










//async function jokeGenerator() {
    
   // const config = {
     //   Headers//: {
         //   Accept//: 'application/json',
      //  },
  //  }

 //   const res = await fetch('https://icanhazdadjoke.com', config)
 //   const data = await res.json()

 //   document.getElementById('result').innerText = data;
//}

//jokeGenerator();

//submitBtn.addEventListener('click', jokeGenerator)


