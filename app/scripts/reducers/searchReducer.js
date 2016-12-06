import {combineReducers} from "redux";
import {
    AFTER_SEARCH,
    DEFAULT_PAGE_NUMBER,
    SET_ALBUMS_ACTIVE_PAGE_NUMBER,
    SET_ARTISTS_ACTIVE_PAGE_NUMBER,
    SET_ACTIVE_QUERY,
    CLEAR_ITEMS
    } from "scripts/constants/searchConsts";
import Immutable from "immutable";

const addItems = (state, {pageNumber, items}) => {
    return state.set(pageNumber, Immutable.fromJS(items));
};

const items = (state = Immutable.fromJS({}), action = null) => {
    switch (action.type) {
        case CLEAR_ITEMS:
            return Immutable.fromJS({});

        case AFTER_SEARCH:
            return addItems(state, action);

        default:
            return state;
    }
};

const albumsActivePageNumber = (state = DEFAULT_PAGE_NUMBER, action = null) => {
    switch (action.type) {
        case CLEAR_ITEMS:
            return DEFAULT_PAGE_NUMBER;

        case SET_ALBUMS_ACTIVE_PAGE_NUMBER:
            return action.pageNumber;

        default:
            return state;
    }
};

const artistsActivePageNumber = (state = DEFAULT_PAGE_NUMBER, action = null) => {
    switch (action.type) {
        case CLEAR_ITEMS:
            return DEFAULT_PAGE_NUMBER;

        case SET_ARTISTS_ACTIVE_PAGE_NUMBER:
            return action.pageNumber;

        default:
            return state;
    }
};

const activeQuery = (state = null, action = null) => {
    switch (action.type) {
        case SET_ACTIVE_QUERY:
            return action.query;

        default:
            return state;
    }
};

export default combineReducers({
    items,
    albumsActivePageNumber,
    artistsActivePageNumber,
    activeQuery
});