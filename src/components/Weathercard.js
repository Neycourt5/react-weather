import React from 'react'

const Weathercard = ({ day, icon, temp }) => {
    return (
        <div className="weather-card">
            <p className="weather-card-day">{day}</p>
            <img src={icon} alt="" />
            <p className="weather-card-temp">{temp}</p>
        </div>
    )
}

export default Weathercard
