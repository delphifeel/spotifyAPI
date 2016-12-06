import noImage from "images/no_image.png";

export const getBackgroundImageStyle = (image) => {
    const backgroundImage = image ? image : noImage;

    return {
        backgroundImage: `url(${backgroundImage})`
    };
};