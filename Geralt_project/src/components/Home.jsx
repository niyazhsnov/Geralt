
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Users.css"
const Home = () => {
  const [products, setUsers] = useState([])
  
  useEffect(() => {
    axios
      .get('https://northwind.vercel.app/api/products')
      .then((res) => setUsers(res.data))
  }, [])
  return (
    <ul  className="main">
      {products.map((user) => {
        return (
          <container>
          <div className="card">
            <ul>
              <li>Name:{user.name}</li>
              <li>In Stock:{user.unitsInStock}</li>
              <li>Price:{user.unitPrice}$</li>
            </ul>
            </div>
     
          </container>
        )
      })}
    </ul>
  )
}

export default Home
