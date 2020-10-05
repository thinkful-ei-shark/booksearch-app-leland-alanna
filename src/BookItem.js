import React from 'react';
import './BookItem.css'

export default class BookItem extends React.Component {
    render() {
        return (
            <div className="book_container">
                <a href="" target="blank">
                    <li className="book_li">
                        <img src="" className="book_image" alt="Cover of the Book Title"></img>
                        <div className="book_info">
                            <h2 className="book_title">title</h2>
                            <h4 className="book_auther">author</h4>
                            <div className="book_cost">cost</div>
                            <p className="book_snippet">Snippet</p>
                        </div>
                    </li>
                </a>
            </div>
        )
    }
}