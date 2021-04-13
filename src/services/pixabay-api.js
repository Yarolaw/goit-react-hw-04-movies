import axios from 'axios';

axios.defaults.baseURL = 'https://developers.themoviedb.org/3';

const galleryApi = {
  API_KEY: '19700503-b2d39d1f98216d71a2eb0aa47',

  fetchGallery (query = '', pageNumber = 1) {
    return  axios
      .get(
        `/?q=${query}&page=${pageNumber}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => data.hits)
      .then(result =>
        result.map(({ id, largeImageURL, webformatURL }) => ({
          id,
          largeImageURL,
          webformatURL,
        })),
      );
  },
};



export default galleryApi;