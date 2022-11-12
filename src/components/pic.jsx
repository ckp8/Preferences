import React, {useState} from 'react'

export default function Pic({pic}) {
    const [showPic, setShowPic] = useState(true);
    const handleClick = () => {setShowPic(!showPic)}
    return (
        <div>
            <div style={showPic ? {display : "grid"  } : {display : "none"}}>
                <img
                src={pic.img}
                width='500px'
                height='500px'
                />    
            </div>
            <button onClick={handleClick}>{showPic ? 'Hide' : 'Show'}</button>
        </div>
    )
}