import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
/**
* @author Matthew Yee
**/

const App = () => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response => response.json())
      // .then(users => console.log(users))
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUserData( res.data)
      // console.log(res.data)
    }
    getUserData()
  }, [])
 
  
 return (
    <div>
      {
        userData.map((users, i) => <h2 key = {i}> { users.name } </h2>)
      }
   </div>
 )
}

export default App

