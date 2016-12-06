import {connect} from "react-redux";
import AlbumsList from "scripts/organisms/albumsList";
import {getSearchedAlbums} from "scripts/selectors";

const mapStateToProps = (state) => ({
    albums: getSearchedAlbums(state)
});

export default connect(mapStateToProps)(AlbumsList);
