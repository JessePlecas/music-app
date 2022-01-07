import axios from 'axios';

const KEY = 'AIzaSyDSta4zGTD4RUVyk6cEWhpidPoPv_xxkiI';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 3,
        key: KEY
    }
});

