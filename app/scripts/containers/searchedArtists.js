import {connect} from "react-redux";
import ArtistsList from "scripts/organisms/artistsList";
import {getSearchedArtists} from "scripts/selectors";

const mapStateToProps = (state) => ({
    artists: getSearchedArtists(state)
});

export default connect(mapStateToProps)(ArtistsList);
