import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from './VideoItem';

const VideoList = ({videoList, onVideoSelect}) => {
    return(
        <Grid container spacing={10}>
            {videoList.map((video,id) => <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />)}
        </Grid>
    )
}

export default VideoList;