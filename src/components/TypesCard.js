import React from 'react'

export default function TypesCard(props) {
    const renderTypes = () => {
        return props.types.map( (t) => <li>{t}</li>)
    }
    return (
        <div>
            {renderTypes()}
        </div>
    )
}
