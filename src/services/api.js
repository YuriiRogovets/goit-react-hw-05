import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
// const API_KEY = "3k00Y2sDYQ_sN2QkRNxz2ujfSSsCzTrfGXKPDe_B5hw";

axios.defaults.baseURL = BASE_URL;

//**********not used */
// const searchParams = {
//   client_id: API_KEY,
//   query: searchQuery,
//   page: numberPage,
//   per_page: 10,
// };

// const searchParams = new URLSearchParams({
//   client_id: API_KEY,
//   query: searchQuery,
//   per_page: 10,
//   page: numberPage,
// });
//************************************************** */

// export const getPhotos = async () => {
//   const response = await axios.get();
//   return response;
// };

// export const getPhotosByQuery = async (searchQuery, pageNumber) => {
//   const searchParams = {
//     client_id: API_KEY,
//     query: searchQuery,
//     per_page: 10,
//     page: pageNumber,
//   };
//   const response = await axios.get(
//     `/search/photos/?${new URLSearchParams(searchParams).toString()}`
//   );
//   return response;
// };
