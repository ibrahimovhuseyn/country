import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import {nanoid} from "nanoid"
function Content() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => setData(res.data))
    }, [])
    return (
        <div>
            {
                data.map((item, index) => (
                    <p key={nanoid()}>
                        <span>{index+1}</span>
                        .
                        <Link to={`/${item.cca3}`} className='link'>{item.name.common}</Link>
                    </p>

                ))
            }

        </div>
    )
}

export default Content