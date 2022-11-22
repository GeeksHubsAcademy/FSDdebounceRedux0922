
import axios from 'axios';

var root = 'https://api.themoviedb.org/3/';
var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';

export const searchFilms = async (criteria) => {

    const config = {
        method: 'get',
        url: `${root}search/movie?api_key=${apiKey}&language=en-US&query=${criteria}&page=1&include_adult=false`
    }

    return await axios(config);
}