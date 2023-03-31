
import React from 'react';
import { useState } from 'react';

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState("")


    const submit = (event) => {
        event.preventDefault()
        if(inputValue.trim() !== ""){
            setInputValue('')
            onAddCategory(inputValue.trim())
        } else {
            return
        }   
    }

    return (
        <form onSubmit={submit}>
           <input
           type='text'
           value={inputValue}
           placeholder="search gifs"
           onChange={(e) => setInputValue(e.target.value)}
           />
        </form>
    );
};
