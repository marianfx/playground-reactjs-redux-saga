import superagent from 'superagent';

const API_ROOT = 'https://conduit.productionready.io/api';
const responseToBody = res => res.body;

const requests = {
    get: url => superagent.get(`${API_ROOT}${url}`).then(responseToBody)
}

const Articles = {
    all: page => requests.get('/articles?limit=10'),
    one: id => requests.get('/articles/' + id)
}

const apiAgent = { 
    Articles
};

export default apiAgent;