import React, { useState } from 'react';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import {useFetchGifs}  from '../hooks/useFetchGifs';
import GifItem from './GifItem';
import LoadingScreen from './LoadingScreen';

export const GiftGrid = ({category}) => {

const {images, isLoading} = useFetchGifs(category);

// const [images, setImages] = useState([]);

//     useEffect(() => {
//         getGifs(category)                           // 1ra forma de realizarlo con el .then
//         .then(newImage => setImages(newImage))

        

//     },[])

   
    console.log({images, isLoading})

    return (
      <>
        <h3>{category}</h3>
        {isLoading && <LoadingScreen />}  
        <div className='card-grid'>
            {
                images.map(img => (
                    <GifItem key={img.id} img={img} />
                    
                    
                ))

            }
            
        </div>
      </>
    );
};

