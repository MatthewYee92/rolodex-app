import './App.css';
import React, { useState } from 'react'

/**
* @author Matthew Yee
**/

const App = () => {
  const [monsters, setMonsters] = useState([
    {
      name: 'Frankenstein',
      id: 'a1'
    },
    {
      name: 'Dracula',
      id: 'a2'
    },
    {
      name: 'Zombie',
      id: 'a3'
    }
  ])

 
 return (
    <div>
    {
      monsters.map(monster => <h1 key={monster.id}> { monster.name } </h1>)
    }
   </div>
 )
}

export default App
