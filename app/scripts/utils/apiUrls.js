const SPOTIFY_API_URL = "https://api.spotify.com/v1/";

const getRequest = (options) => {
    return Object.assign({}, options, {
        method: "GET"
    });
};

/*const postRequest = (options) => {
    return Object.assign({}, options, {
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(options.data)
    });
};*/

/*const spotifyPostRequest = (options) => {
    options.url = SPOTIFY_API_URL + options.url;

    return postRequest(options);
};*/

const spotifyGetRequest = (options) => {
    options.url = SPOTIFY_API_URL + options.url;

    return getRequest(options);
};

let apiUrl = {};

apiUrl.search = (q, type, market, limit, offset) => {
    return spotifyGetRequest({
        url: `search?q=${q}&type=${type}&market=${market}&limit=${limit}&offset=${offset}`
    });
};

export default apiUrl;