import { createStore, combineReducers } from 'redux';

import jobsReducer from './reducers/jobsReducers';

const rootReducer = combineReducers({
    jobs: jobsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;