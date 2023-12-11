import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import data from './data'

export default function App() {
      const CardData = data.map((item)=> {
          return ( 
          <Card 
                  key={item.id}
                  iteminfo={item}
          />)

      }
   
      )

  return (
    <div>
      <Navbar />
       {CardData}   
      </div>
  )
}