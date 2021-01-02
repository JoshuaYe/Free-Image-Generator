import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ThL5DRAsdTloHLMXPVZX2W4PemRL99DVBHT48XqAMcc'
    }
});