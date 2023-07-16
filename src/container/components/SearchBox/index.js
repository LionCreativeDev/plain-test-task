//import React, { useState } from 'react'
import React from 'react'

const SearchBox = ({ parameters }) => {
    //const [searchText, setSearchText] = useState("");

    return (
        <div className="row py-4 px-4">
            <div className="col-sm-12 col-md-6 d-flex align-items-center mb-2 px-0 pe-md-1">
                <label className="form-label mb-0 me-2">Filter: </label>
                <input className="form-control" placeholder="ie: John" value={parameters.searchText} onChange={(e) => parameters.setSearchText(e.target.value)} />
            </div>
            <div className="col-sm-12 col-md-6 d-flex align-items-center mb-2 px-0 ps-md-1">
                <label className='form-label mb-0 me-2'>Sort: </label>
                <select className="form-select" aria-label="Sort" value={parameters.order} onChange={(e) => parameters.setOrder(e.target.value)}>
                    <option value="">Default</option>
                    <option value="asc">A to Z</option>
                    <option value="desc">Z to A</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBox