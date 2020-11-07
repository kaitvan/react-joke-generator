import axios from 'axios';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      const jokeObject = response.data;
      resolve(jokeObject);
    }).catch((error) => reject(error));
});

export default { getJoke };
