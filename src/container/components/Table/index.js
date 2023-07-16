//import React, { useState, useEffect } from 'react'
import React from "react"
//import axios from 'axios';

const Table = ({ parameters }) => {
    return (
        <div className='row px-4'>
            <div className='col-sm-12 overflow-x-scroll px-0'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parameters.records.map(({ id, name, email, address, phone, website }, index) => (
                                <tr key={index}>
                                    <th>{id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{`${address.street}, ${address.suite}, ${address.city}`}</td>
                                    <td>{phone}</td>
                                    <td>{website}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table