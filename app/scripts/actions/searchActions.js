import SearchService from "scripts/services/searchService";
import {AFTER_SEARCH, SET_ALBUMS_ACTIVE_PAGE_NUMBER, SET_ARTISTS_ACTIVE_PAGE_NUMBER, SET_ACTIVE_QUERY, CLEAR_ITEMS} from "scripts/constants/searchConsts";

export const afterSearch = (pageNumber, items) => ({
    type: AFTER_SEARCH,
    pageNumber,
    items
});

export const setAlbumsActivePageNumber = (pageNumber) => ({
    type: SET_ALBUMS_ACTIVE_PAGE_NUMBER,
    pageNumber
});

export const setArtistsActivePageNumber = (pageNumber) => ({
    type: SET_ARTISTS_ACTIVE_PAGE_NUMBER,
    pageNumber
});

export const search = (q, pageNumber) => (
    (dispatch) => (
        SearchService.search(q, pageNumber)
            .then(payload => !!payload && dispatch(afterSearch(pageNumber, payload)))
    )
);

export const setActiveQuery = (query) => ({
    type: SET_ACTIVE_QUERY,
    query
});

export const clearItems = () => ({
    type: CLEAR_ITEMS
});