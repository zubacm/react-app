import React, {useState} from 'react'
import ChildComponent from './ChildComponent';


export default function HomePage() {
    const [showChild1, setShowChild1] = useState(false);
    const [showChild2, setShowChild2] = useState(false);
    const [childvalues1, setChildvalues1] = useState({name: '', weight: 0})
    const [childvalues2, setChildvalues2] = useState({name: '', weight: 0})

    function showFirstChild() {
        setChildvalues1({name: 'child1', weight:60})
        setShowChild1(!showChild1)
    }

    function showSecondChild() {
        setChildvalues2({name: 'child2', weight:70})
        setShowChild2(!showChild2);
    }

    return (
        <div>
            <h1>Home</h1>
            <button  onClick={showFirstChild}>prvo</button>
            <button   onClick={showSecondChild}>Drugo</button>

            {showChild1 && <ChildComponent  childvalues={childvalues1}/>}
            {showChild2 && <ChildComponent  childvalues={childvalues2}/>}
        </div>
    )
}
