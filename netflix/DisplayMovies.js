import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class DisplayMovies extends Component {
    render() {
            var display = this.props.netflixList.map(
                eachItemTest=>{

                    return(
                        <div>
                            <h2> Movie Name: {eachItem.movieName}</h2>
                            <h2> Year Released:{eachItem.yearReleased}</h2>
                            <h2> Genre:{eachItem.genre}</h2>

                        </div>
                    );

                }

            )


        return (
            <div className="DisplayMovies">
                <h3> { this.props.netflixList}    </h3>

            </div>
        );
    }
}

export default DisplayMovies;
