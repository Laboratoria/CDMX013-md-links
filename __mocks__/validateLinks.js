//const axios = () => jest.fn()

const axios = jest.fn(() => Promise.resolve( {status: 200, statusText: 'OK'} ));

module.exports = axios;
