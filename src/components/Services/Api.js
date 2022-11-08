import axios from 'axios';

// axios.defaults.baseURL = `https://pixabay.com/api/`;
// const PIXABAY_KEY = `29626479-30d098b137805aefe019417a9`;

// export async function apiQuery(nextQuery, page = 1) {
//   const fetch = `?q=${nextQuery}&page=${page}&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   const respons = await axios.get(fetch);

//   return respons;
// }

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const PIXABAY_KEY = `47d4e1a1a10be98644abcf2b38417f6e`;

export async function apiTrending() {
  const fetch = `trending/movie/day?api_key=${PIXABAY_KEY}`;
  const respons = await axios.get(fetch);
  console.log(respons);
  return respons;
}

// https://api.themoviedb.org/3/trending/movie/day?api_key=47d4e1a1a10be98644abcf2b38417f6e

// https://api.themoviedb.org/3/movie/550?api_key=47d4e1a1a10be98644abcf2b38417f6e
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false