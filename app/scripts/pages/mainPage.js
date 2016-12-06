import React, {Component} from "react";
import SpotifySearchInput from "scripts/containers/spotifySearchInput";
import SearchedArtists from "scripts/containers/searchedArtists";
import SearchedAlbums from "scripts/containers/searchedAlbums";
import ComponentSelector from "scripts/organisms/componentSelector";
import SearchedArtistsPaginator from "scripts/containers/searchedArtistsPaginator";
import SearchedAlbumsPaginator from "scripts/containers/searchedAlbumsPaginator";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.componentSelectorValues = [
            {
                id: "Artists",
                component:
                    <div>
                        <SearchedArtists />
                        <SearchedArtistsPaginator />
                    </div>
            },
            {
                id: "Albums",
                component:
                    <div>
                        <SearchedAlbums />
                        <SearchedAlbumsPaginator />
                    </div>
            }
        ];
    }

    render() {
        return (
            <div className="main-page">
                <SpotifySearchInput />
                <ComponentSelector values={this.componentSelectorValues}/>
            </div>
        );
    }
}

export default MainPage;