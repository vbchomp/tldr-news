// import { API_KEY, endpoint } from '../config/config.js';
import { endpoint } from '../config/config';
import axios from 'axios';

// export const services = async () => {
//   let articles = await axios(`${endpoint}?language=${language}?apikey=${API_KEY}`);
  
//   let result = articles.json();
//   articles = null;

//   return result.articles;
// }

export const services = async () => {
  // let result = await axios(`${endpoint}`);
  let result = await axios('https://dog.ceo/api/breeds/image/random');

  return result; 
}