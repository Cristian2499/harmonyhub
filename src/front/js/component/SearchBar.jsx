import React from 'react'

const SearchBar = () => {
    return (
        <div className='container d-flex gap-5'>
            <div className='row'>
                <label className='fw-bold' htmlFor="">Choose a place</label>
                <select class="form-select form-select-sm rounded" aria-label="Small select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='row'>
                <label htmlFor="">Choose a role</label>
                <select class="form-select form-select-sm w-75" aria-label="Small select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='row'>
                <label htmlFor="">Choose a music genre</label>
                <select class="form-select form-select-sm w-75" aria-label="Small select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='row'>
                <button className='btn btn-success'>Search</button>
            </div>
        </div>
    )
}

export default SearchBar