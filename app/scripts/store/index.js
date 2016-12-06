import {combineReducers, applyMiddleware, createStore, compose} from "redux";
import reduxThunk from "redux-thunk";
import {routerReducer} from "react-router-redux";
import {browserHistory } from "react-router";
import {routerMiddleware} from "react-router-redux";
import searchReducer from "scripts/reducers/searchReducer";

const initialState = {};

const mainReducer = combineReducers({
    routing: routerReducer,
    search: searchReducer
});

const getAvailableDevTools = () => {
    if (process.env.NODE_ENV === "development" && window.devToolsExtension) {
        return window.devToolsExtension();
    } else {
        return f => f;
    }
};

const router = routerMiddleware(browserHistory);

const mainStore = createStore(
    mainReducer,
    initialState,
    compose(
        applyMiddleware(
            reduxThunk,
            router
        ),
        getAvailableDevTools()
    )
);

export default mainStore;