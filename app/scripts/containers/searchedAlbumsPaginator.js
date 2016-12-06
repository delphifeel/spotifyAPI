import {connect} from "react-redux";
import PaginationComponent from "scripts/molecules/paginationComponent";
import {getAlbumsPagesCount, getAlbumsSearchActivePageNumber, getSearchItems, getActiveQuery} from "scripts/selectors";
import {setAlbumsActivePageNumber, search} from "scripts/actions/searchActions";

const mapStateToProps = (state) => ({
    pagesCount: getAlbumsPagesCount(state),
    activePageNumber: getAlbumsSearchActivePageNumber(state),
    searchItems: getSearchItems(state),
    activeQuery: getActiveQuery(state)
});

const onChange = (activeQuery, searchItems, dispatch, pageNumber) => {
    const itemsByPageNumber = searchItems.get(pageNumber);

    if (!itemsByPageNumber || itemsByPageNumber.isEmpty()) {
        dispatch(search(activeQuery, pageNumber));
    }

    dispatch(setAlbumsActivePageNumber(pageNumber));
};

const mergedProps = (stateProps, {dispatch}) => {
    const {searchItems, pagesCount, activePageNumber, activeQuery} = stateProps;

    return {
        pagesCount, activePageNumber,
        onChange: onChange.bind(null, activeQuery, searchItems, dispatch)
    };
};

export default connect(mapStateToProps, null, mergedProps)(PaginationComponent);