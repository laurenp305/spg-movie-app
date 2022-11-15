//const API_KEY = '2e4dd8e00581ce40e2b2bff93ed85eaf';
//const API_BASE = 'https://api.themoviedb.org/3';

//We need to format fetch for this new API

export const searchTheMovieDatabase = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

//Connection String for the movie DB
//https://api.themoviedb.org/3/movie/550?api_key=2e4dd8e00581ce40e2b2bff93ed85eaf