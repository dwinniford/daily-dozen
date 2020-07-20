import React from 'react'
import {LabelInputForm, FormInput, FormLabel} from '../style/dashboard'

export default function TagForm() {
    return (
        <LabelInputForm>
            <FormLabel for="name">enter a tag</FormLabel>
            <FormInput type="text" name="tag" ></FormInput>
            
        </LabelInputForm> 
    )
}
