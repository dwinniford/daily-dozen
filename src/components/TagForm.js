import React, {useState} from 'react'
import {LabelInputForm, FormInput, FormLabel} from '../style/dashboard'

export default function TagForm() {
    const [tagSearchResults, setTagSearchResults] = useState([])
    
    const handleInputKeyUp = (event) => {
        console.log(event.target.value)
        setTagSearchResults([...tagSearchResults, event.target.value])
    }

    return (
        <LabelInputForm>
            <FormLabel for="name">enter a tag</FormLabel>
            <FormInput onKeyUp={(event) => handleInputKeyUp(event)} type="text" name="tag" ></FormInput>
            <ul>
                {tagSearchResults.map(t => <li>{t}</li>)}
            </ul>
        </LabelInputForm> 
    )
}

