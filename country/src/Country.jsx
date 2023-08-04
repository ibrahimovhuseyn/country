import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import {nanoid} from "nanoid"

function Country() {
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setData(res.data[0])
                }
            })
    }, [id])

    return (
        <div className='d-flex justify-content-between align-items-center'>
            <Link className='btn btn-danger' to="/">Geri</Link>

            <img src={data.flags?.png} />
            <div>
                <p><b>Country name:</b> {data.name?.common}</p>
                <p><b>Population:</b>    {data.population}</p>
                <p>
                    <b>Borders:</b> {
                        !data.borders? "Quru serheddi yoxdur"
                        :
                    data.borders?.map(item=>(
                        
                        <Link to={`/${item}`} key={nanoid()} className='items'>{item}</Link>
                    ))
                }</p>

            </div>

        </div>
    )
}

export default Country