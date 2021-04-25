import React, { useEffect } from 'react'

export default function ChildComponent(props) {
    useEffect(() => {
        console.log("childvalues", props);
        
    }, [])
    return (
        <div>
            Child
        <h1>{props.childvalues.name}</h1>
        <h1>{props.childvalues.weight}</h1>
        </div>
    )
}
