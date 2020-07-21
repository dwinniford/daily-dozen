import React from 'react'
import {LabelInputForm, FormInput, FormLabel} from '../style/dashboard'

export default function TagForm() {
    const handleInputKeyUp = (event) => {
        console.log(event.target.value)
    }

    return (
        <LabelInputForm>
            <FormLabel for="name">enter a tag</FormLabel>
            <FormInput onKeyUp={(event) => handleInputKeyUp(event)} type="text" name="tag" ></FormInput>
            
        </LabelInputForm> 
    )
}

