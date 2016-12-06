import React, {PropTypes} from "react";
import ArtistShape from "scripts/shapes/artistShape";
import {getBackgroundImageStyle} from "scripts/utils";

const ArtistItem = ({artist}) => {
    const {name, smallImage} = artist;

    const style = getBackgroundImageStyle(smallImage);

    return (
        <div className="artist-item" style={style}>
            <div className="footer">
                <span className="name">{name}</span>
                {/*<span className="popularity">{popularity}</span>*/}
            </div>
        </div>
    );
};

const {shape} = PropTypes;

ArtistItem.propTypes = {
    artist: shape(ArtistShape).isRequired
};

export default ArtistItem;