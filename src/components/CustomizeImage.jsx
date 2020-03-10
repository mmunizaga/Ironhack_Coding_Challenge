import React, { useState }  from 'react'


export default function CustomizeImage() {

    const [url, setUrl] = useState('https://i.pinimg.com/736x/33/53/58/33535883a2f27e9cf2f05b636f6dbe6b.jpg');
    const [size, setSize] = useState(80);

    const handleUrl = e => {
       setUrl(e.target.value)
    }
    const handleSize = e => {
        setSize(e.target.value)
    }

    return (
        <div>
            <h1>Customize Image</h1>
            <input
            type="text"
            name="imgUrl"
            value={url}
            onChange={handleUrl}
            />
            <br></br>
            <input
            type="range"
            name="size"
            min="10"
            max="200"
            value={size}
            onChange={handleSize}
            />
            <p>{size} x {size} px</p>
            <img src={url} style={{height:`${size}px`,width:`${size}px`}}/>
        </div>
    )
}

