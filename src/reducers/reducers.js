const { actionTypes } = require("../actions/actionTypes");

const defaultState = { 
    checked: false,
    appName: 'Tester boy',
    articles: null
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
        default:
            return state;
    }
}

export { appReducer };