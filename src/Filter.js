import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {
    render() {
        return (
            <div className="filter_bar_container">
                <label>Print Type:</label>
                <form
                    action=""
                    className="print_type_filter_form"
                >
                    <select name="print-type-filter">
                        <option value="all">All</option>
                        <option value="books">Only Books</option>
                        <option value="magazines">Only Magazines</option>
                    </select>
                </form>
                <label>Book Type:</label>
                <form
                    action=""
                    className="book_type_filter_form">
                    <select name="book-type-filter">
                        <option value="ebooks">All eBooks</option>
                        <option value="free-ebooks">Free eBooks</option>
                        <option value="paid-ebooks">
                            Paid eBooks
                        </option>
                        <option value="full">Fully Available eBooks</option>
                        <option value="partial">
                            Partially Available ebooks
                        </option>
                    </select>
                </form>
            </div>
        )
    }
}