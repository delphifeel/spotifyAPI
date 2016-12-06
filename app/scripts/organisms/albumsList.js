import React, {PropTypes} from "react";
import AlbumShape from "scripts/shapes/albumShape";
import AlbumItem from "scripts/molecules/albumItem";

const AlbumsList = ({albums}) => {
    return (
        <div className="albums-list">
            {
                albums.map(album => <AlbumItem key={album.id} album={album}/>)
            }
            {
                albums.length === 0 &&
                <span className="empty">No items</span>
            }
        </div>
    );
};

const {arrayOf, shape} = PropTypes;

AlbumsList.propTypes = {
    albums: arrayOf(
        shape(AlbumShape)
    ).isRequired
};

export default AlbumsList;