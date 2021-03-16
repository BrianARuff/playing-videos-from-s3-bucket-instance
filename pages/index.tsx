import * as React from 'react'
import {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import {Typography} from "@material-ui/core";


export default function Home() {
    const [videoURL, setvideoURL] = useState(null);
    useEffect(() => {
        fetch("/api/hello") .then(r => r.json()).then(s => {
            setvideoURL(s.data);
        })
    }, [])
    return (
        <>
           <Typography variant="h1">ASMR</Typography>
            <Typography variant="h4">Car Wash</Typography>
            <ReactPlayer url={videoURL} controls autoPlay/>

        </>
    )
}
