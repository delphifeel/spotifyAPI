import {PropTypes} from "react";

const {string} = PropTypes;

export default {
    id: string.isRequired,
    name: string.isRequired,
    spotifyUrl: string.isRequired,
    smallImage: string
};