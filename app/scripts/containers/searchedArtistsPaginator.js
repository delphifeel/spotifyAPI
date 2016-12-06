import {connect} from "react-redux";
import PaginationComponent from "scripts/molecules/paginationComponent";
import {getArtistsPagesCount, getArtistsSearchActivePageNumber, getSearchItems, getActiveQuery} from "scripts/selectors";
import {setArtistsActivePageNumber, search} from "scripts/actions/searchActions";

const mapStateToProps = (state) => ({
    pagesCount: getArtistsPagesCount(state),
    activePageNumber: getArtistsSearchActivePageNumber(state),
    searchItems: getSearchItems(state),
    activeQuery: getActiveQuery(state)
});

const onChange = (activeQuery, searchItems, dispatch, pageNumber) => {
    const itemsByPageNumber = searchItems.get(pageNumber);

    if (!itemsByPageNumber || itemsByPageNumber.isEmpty()) {
        dispatch(search(activeQuery, pageNumber));
    }

    dispatch(setArtistsActivePageNumber(pageNumber));
};

const mergedProps = (stateProps, {dispatch}) => {
    const {searchItems, pagesCount, activePageNumber, activeQuery} = stateProps;

    return {
        pagesCount, activePageNumber,
        onChange: onChange.bind(null, activeQuery, searchItems, dispatch)
    };
};

export default connect(mapStateToProps, null, mergedProps)(PaginationComponent);