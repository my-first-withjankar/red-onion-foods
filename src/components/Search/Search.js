import React from 'react';
import './Search.css'


const Search = () => {
    return (
        < div className='mt-3'>
            <div className="input-group mb-3">
                <input type="text" className=" search-input form-control px-5" placeholder="Search food items" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className=" search-btn bg-danger text-light btn btn-outline-danger" type="button">Button</button>
                </div>
            </div>
        </div >
    );
};

export default Search;