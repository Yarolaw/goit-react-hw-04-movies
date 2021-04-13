import axios from 'axios';

axios.defaults.baseURL = 'https://developers.themoviedb.org/3';
const API_KEY = '8bdf11970b9fe1026b20627e10b7f0b2';

const getCast = async movieId => {
  const response = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    .then(response => response.data)
    .then(data => data.cast);
};
export default getCast;
