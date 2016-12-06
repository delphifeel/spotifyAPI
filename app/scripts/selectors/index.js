import {createSelector} from "reselect";
import {DEFAULT_LIMIT} from "scripts/constants/searchConsts";

export const getActiveQuery = state => state.search.activeQuery;

export const getSearchItems = state => state.search.items;

export const getArtistsSearchActivePageNumber = state => state.search.artistsActivePageNumber;

export const getAlbumsSearchActivePageNumber = state => state.search.albumsActivePageNumber;

export const getSearchedArtists = createSelector(
    [getSearchItems, getArtistsSearchActivePageNumber],
    (searchItems, searchActivePageNumber) => {
        if (searchItems.isEmpty() || !searchActivePageNumber) {
            return [];
        }

        const items = searchItems.get(searchActivePageNumber);
        if (!items) {
            return [];
        }

        const itemsJs = items.toJS();

        const artists = itemsJs.artists.items;
        return artists.map(artist => {
            const {id, name, popularity} = artist;

            const smallImageUrl = artist.images.length > 0 ?
                artist.images[artist.images.length - 1].url :
                "";

            return {
                id, name, popularity,
                spotifyUrl: artist.external_urls.spotify,
                smallImage: smallImageUrl
            };
        });
    }
);

export const getSearchedAlbums = createSelector(
    [getSearchItems, getAlbumsSearchActivePageNumber],
    (searchItems, searchActivePageNumber) => {

        if (searchItems.isEmpty() || !searchActivePageNumber) {
            return [];
        }

        const items = searchItems.get(searchActivePageNumber);
        if (!items) {
            return [];
        }

        const itemsJs = items.toJS();

        const albums = itemsJs.albums.items;
        return albums.map(album => {
            const {id, name} = album;

            const smallImageUrl = album.images.length > 0 ?
                album.images[album.images.length - 1].url :
                "";

            return {
                id, name,
                spotifyUrl: album.external_urls.spotify,
                smallImage: smallImageUrl
            };
        });
    }
);

export const getArtistsPagesCount = createSelector(
    [getSearchItems],
    (searchItems) => {
        if (searchItems.isEmpty()) {
            return 0;
        }

        const totalItems = searchItems.first().get("artists").get("total");
        const pagesCount = Math.ceil(totalItems / DEFAULT_LIMIT);
        return pagesCount;
    }
);

export const getAlbumsPagesCount = createSelector(
    [getSearchItems],
    (searchItems) => {
        if (searchItems.isEmpty()) {
            return 0;
        }

        const totalItems = searchItems.first().get("albums").get("total");
        const pagesCount = Math.ceil(totalItems / DEFAULT_LIMIT);
        return pagesCount;
    }
);