
import React from 'react';
import { useState } from 'react';
import {AddCategory, GiftGrid} from './components';




const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])  
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)){
            return
        }else {

            setCategories(() => [...categories, newCategory])
        }
        // setCategories( [...categories, 'Dragon Ball'])
    }
    
    
    return (
        <div>
            {/* Titulo */}
            <h1>Hello World</h1>

            {/* Input */}
            <AddCategory onAddCategory ={onAddCategory}/>

            {/* Listado de Gif */}
          
          
                    {
                        categories.map(category => (
                            <div >

                                <GiftGrid 
                                key={category} 
                                category ={category}/>
                                
                            </div>
                        ))
                    }
          
          
                {/* Gif Item */}
        </div>
    );
};

export default GifExpertApp;