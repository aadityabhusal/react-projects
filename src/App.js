import React, { Component } from 'react'

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetails, VideoList} from "./components";

import youtube from "./api/youtube";

class App extends Component{
    state = {
        videos: [],
        selectedVideo: null
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    handleSubmit = async (searchText) => {
        const response = await youtube.get('search', {
            params:{
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: 'AIzaSyCQn0SKCGfTeQz_J9AJsGcgrGZ2VTprsaM',
                q: searchText
            }
        })
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    componentDidMount(){
        this.handleSubmit('')
    }

    render(){
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videoList={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;