import * as React from 'react'
import {useEffect, useState} from "react";
import ReactPlayer from "react-player";


export default function Home() {
    const [videoURL, setvideoURL] = useState(null);
    useEffect(() => {
        fetch("/api/hello") .then(r => r.json()).then(s => {
            setvideoURL(s.data);
        })
    }, [])
    return (
        <div>
            <h1>ASMR</h1>
            <h4>Car  Wash</h4>
            <ReactPlayer url={videoURL} controls autoPlay/>

        </div>
    )
}
