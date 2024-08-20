import React from 'react'
import "../../styles/search-bar.css";

const SearchBar = () => {
    return (
        <div className='container d-flex gap-5 justify-content-center'>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a place</label>
                <select class="form-select form-select-sm" aria-label="Small select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a role</label>
                <select class="form-select form-select-sm" aria-label="Small select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='row'>
                <label className='fw-bold ps-0 mb-1' htmlFor="">Choose a music genre</label>
                <select class="form-select form-select-sm" aria-label="Small select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='d-flex align-items-end'>
            <button className="search px-4">Search</button>
            </div>
        </div>
    )
}

export default SearchBar