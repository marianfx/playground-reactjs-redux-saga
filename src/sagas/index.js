import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import apiAgent from '../api/agent';
import { actionTypes } from '../actions/actionTypes';

// generator function - the actual worker saga that triggers tha api call and gets the article
function* fetchArticle(action) {
    try {
        const article = yield call(apiAgent.Articles.one, action.payload.articleId);
        yield put( { type: actionTypes.SAGATEST_REQUEST_SUCCEEDED, payload: { article } });
    } catch (error) {
        yield put({ type: actionTypes.SAGATEST_REQUEST_FAILED,  payload: { error }});
    }
}

// method 1: declara a saga that will fetch the article 
// everytime the action is triggered
// function* articleSaga() {
//     yield takeEvery(actionTypes.SAGATEST_REQUEST, fetchArticle);
// }

// method 2: declara a saga that will fetch the article 
// everytime, but if an existing fetch exists, cancels it
function* articleSaga() {
    yield takeLatest(actionTypes.SAGATEST_REQUEST, fetchArticle);
}

export default articleSaga;