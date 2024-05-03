import './ImageGalleryItem.css'

export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
    return (
        <li className="gallery-item" key={id} >
                <img className="img" src={webformatURL} alt={tags} />
        </li>
    )
}