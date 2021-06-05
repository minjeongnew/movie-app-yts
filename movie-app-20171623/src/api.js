import axios from 'axios';

const api = axios.create({
  baseURL: '/yts',
  // headers: {
  //   // 'X-Naver-Client-Id': ID_KEY,
  //   // 'X-Naver-Client-Secret': SECRET_KEY,
  // }
});
export const getSearchMovieAPI = {
  search : search => {
    let sb = search.split(" ")[0]
    let limit = search.split(" ")[1]
    if (sb === "like") {
      return api.get(`/yts/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=${limit}`)
    } else {
      return api.get(`/yts/api/v2/list_movies.json?sort_by=${sb}&order_by=desc&limit=${limit}`)
    }
}

};
