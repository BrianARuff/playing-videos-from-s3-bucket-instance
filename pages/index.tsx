import * as React from 'react'
import {LegacyRef, Ref, RefObject, useEffect, useState} from "react";
import ReactPlayer from "react-player";
import {Typography, Button, Input, InputLabel} from "@material-ui/core";


export default function Home() {
    const [inputData, setInputData] = useState({value: ""});
    const videoPlayer = React.createRef<ReactPlayer>();
    const [videoURL, setVideoURL] = useState();
    useEffect(() => {
        fetch("/api/hello").then(r => r.json()).then(({data}) => {
            setVideoURL(data);
        })
    }, []);
    const handlePlayVideo = e => {
        console.log(videoPlayer.current.seekTo(Number(inputData.value)));
    }
    const handleInputChange = e => setInputData(() => ({[e.target.name]: e.target.value}))
    return (
        <>
            <Typography variant="h1">ASMR</Typography>
            <Typography variant="h4">Car Wash</Typography>
            <ReactPlayer ref={videoPlayer} url={videoURL} controls autoPlay/>
            <div style={{margin: "1rem  0"}}>
                <Input placeholder="Time stamp in seconds" onChange={handleInputChange} name="value"/>
            </div>
            <Button onClick={handlePlayVideo} variant="contained" color="primary" fullWidth={true}>Play at specified value</Button>
        </>
    )
}
