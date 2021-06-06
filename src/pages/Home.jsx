import React, { useEffect, useState } from 'react'
import ListCard from '../components/ListCard/ListCard'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const [beers, setBeers] = useState([]);
    useEffect(async () => {
        const data = await fetch('https://60b9129080400f00177b619f.mockapi.io/api/v1/products');
        setBeers(Object.values(await data.json()))            
    }, [])

    return (
        <div>
            <Navbar />
            <ListCard items={beers} />
        </div>
    )
}

export default Home
