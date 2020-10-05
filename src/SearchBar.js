import React from 'react';
import './SearchBar.css'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className = 'search'>
                <form id='js-search-bar'>
                    <label for='search'>Search: </label>
                    <input id='search' type='text' />
                    <input id= 'js-submit' type='submit' value="Search"/>
                </form>
            </div>
        )
    }
}