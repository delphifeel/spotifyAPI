import React, {PropTypes} from "react";
import ArtistShape from "scripts/shapes/artistShape";
import ArtistItem from "scripts/molecules/artistItem";

const ArtistsList = ({artists}) => {
    return (
        <div className="artists-list">
            {
                artists.map(artist => <ArtistItem key={artist.id} artist={artist}/>)
            }
            {
                artists.length === 0 &&
                    <span className="empty">No items</span>
            }
        </div>
    );
};

const {arrayOf, shape} = PropTypes;

ArtistsList.propTypes = {
    artists: arrayOf(
        shape(ArtistShape)
    ).isRequired
};

export default ArtistsList;