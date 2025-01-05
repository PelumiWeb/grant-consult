import Api from './Api';

const URL = 'http://mobilottogames.com:8085'

export default new Api(URL);

const newURL = "http://mobilottogames.com:8085"

export const newApi = new Api(newURL)
