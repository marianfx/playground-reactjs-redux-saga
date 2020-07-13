const { actionTypes } = require("../actions/actionTypes");

const defaultState = { 
    checked: false,
    appName: 'Tester boy',
    articles: null,
    article: null
};

const appReducer = function(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.APP_TOGGLE:
            return {
                ...state,
                checked: !state.checked
            }
        case actionTypes.HOME_PAGE_LOADED:
            return {
                ...state,
                articles: action.payload.articles
            }
        case actionTypes.SAGATEST_REQUEST_SUCCEEDED:
            console.log("taking article", action);
            return {
                ...state,
                article: action.payload.article
            }
        case actionTypes.SAGATEST_REQUEST:
        case actionTypes.SAGATEST_REQUEST_FAILED:
            return {
                ...state,
                article: null
            }
        default:
            return state;
    }
}

export { appReducer };