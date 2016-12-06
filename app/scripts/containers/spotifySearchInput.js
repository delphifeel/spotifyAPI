import {connect} from "react-redux";
import SearchInput from "scripts/atoms/searchInput";
import {search, setActiveQuery, clearItems} from "scripts/actions/searchActions";
import {DEFAULT_PAGE_NUMBER} from "scripts/constants/searchConsts";

const mapDispatchToProps = (dispatch) => ({
    search: (q) => {
        if (q) {
            dispatch(clearItems());
            dispatch(search(q, DEFAULT_PAGE_NUMBER));
            dispatch(setActiveQuery(q));
        }
    }
});

export default connect(null, mapDispatchToProps)(SearchInput);