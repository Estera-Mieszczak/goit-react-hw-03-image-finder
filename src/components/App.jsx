
import { useState, useEffect } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader"
import { Searchbar } from "./Searchbar/Searchbar";
import css from "./App.module.css";
// import { Modal } from "./Modal/Modal"


const apiEndpoint = 'https://pixabay.com/api/?key=42651602-8bf55650de46c7437c76ae15b'
// const apiKey = '42651602-8bf55650de46c7437c76ae15b'

export const App = () => {
  const [ photos, setPhotos ] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [ searchPhoto, setSearchPhoto ] = useState('')

  useEffect(() => {
    setCurrentPage(1);
    setPhotos([]);
    setIsLoading(false);
  }, [])

  const handleCurrentPageUpdate = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage +1 )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPhotos([]);
    getInitialData();
    handleCurrentPageUpdate();
    
  }

  const handleChange = (event) => {
    const { value } = event.target

    setSearchPhoto(value)
  }

  const getInitialData = async () => {
    try {
      const response = await fetch(`${apiEndpoint}&page=${currentPage}&per_page=12&q=${searchPhoto}`)
      const photos = await response.json()
      console.log(photos.hits)
      setPhotos((prev) => [...prev, ...photos.hits]) 
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClick = () => { 
    handleCurrentPageUpdate()
    getInitialData()
  }

  return (
    <div className={css.App}>
      <Searchbar handleSubmit={handleSubmit} handleChange={handleChange} />
      {error && <p>Something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {(currentPage > 1 && isLoading === false) ? <Button handleClick={handleClick} /> : <></>}
      {/* <Modal largeImageURL={} /> */}
    </div>  
  );
};
