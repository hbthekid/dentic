import React, { useEffect, useState } from 'react'
import ListCard from '../components/ListCard/ListCard'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    const [beers, setBeers] = useState([])
    useEffect(async () => {
        const res = await fetch('/products')
        const { data } = await res.json()
        setBeers(data)
    }, [])

    return (
        <div>
            <Navbar />
            <ListCard items={beers} />
        </div>
    )
}

export default Home
