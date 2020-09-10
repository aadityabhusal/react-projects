import React, { Component } from 'react';
import { Paper, TextField } from "@material-ui/core";


class SearchBar extends Component{

    constructor(){
        super();
        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {search} = this.state;
        this.props.onFormSubmit(search)
    }


    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search Here..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;