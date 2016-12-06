import React, {PropTypes} from "react";
import {getBackgroundImageStyle} from "scripts/utils";
import AlbumShape from "scripts/shapes/albumShape";

const AlbumItem = ({album}) => {
    const {name, smallImage} = album;

    const style = getBackgroundImageStyle(smallImage);

    return (
        <div className="album-item" style={style}>
            <div className="footer">
                <span className="name">{name}</span>
            </div>
        </div>
    );
};

const {shape} = PropTypes;

AlbumItem.propTypes = {
    album: shape(AlbumShape).isRequired
};

export default AlbumItem;