import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
 
    const [images, setImages]= useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const getImages = async () =>{
    //     const newImages = await getGifs(category);  // 2da forma con una funcion y async/await
    //     setImages(newImages);
    //     setIsLoading(false)
    // }

    useEffect(() => {
        // getImages();
       
            getGifs(category)                           // 1ra forma de realizarlo con el .then
        .then(newImage => setImages(newImage))
        .finally(() => setIsLoading(false))
    },[])


    return {
        images,
        isLoading
    }
}
