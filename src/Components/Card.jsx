import React from 'react'

export default function Card(props) {
  return (
    <div className='card--container'>
      <img  className="image" src={props.iteminfo.imageUrl} alt="marrakech" />

        <div className='card--info'>
            <div className='location-container'>
              <img className="icone--map" src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="" />
              <p className='location'>{props.iteminfo.location}</p>
              <a className='maps' href={props.iteminfo.googleMapsUtl}>View on Google Maps</a>
            </div>
            <h1 className='title'>{props.iteminfo.title}</h1>
            <p className='date'>{props.iteminfo.starDate} - {props.iteminfo.endDate}</p>
            <p>{props.iteminfo.description}</p>
        </div>
    </div>
  )
}
