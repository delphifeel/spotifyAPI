import {PropTypes} from "react";

const {string, number} = PropTypes;

export default {
    id: string.isRequired,
    name: string.isRequired,
    popularity: number.isRequired,
    spotifyUrl: string.isRequired,
    smallImage: string
};