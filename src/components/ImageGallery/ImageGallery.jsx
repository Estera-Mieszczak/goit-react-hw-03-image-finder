import './ImageGallery.css'

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ photos }) => {
    return (
        <ul className="gallery">
            {photos.length > 0 && photos.map(({ webformatURL, tags, id}) => <ImageGalleryItem key={ id } webformatURL={ webformatURL } tags={ tags } />)}   
        </ul>
    )
}