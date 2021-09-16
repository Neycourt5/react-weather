import React from 'react'
import Weathercard from './Weathercard'

const Weathercards = ({ forecast, isLoading }) => {
    return isLoading ? <div className='weather-cards-group'
    >Loading...</div> :
        <div className='weather-cards-group'>
            {forecast.map((day) => <Weathercard
                day={day.date}
                icon={day.day.condition.icon}
                temp={`${day.day.avgtemp_c}°C`}
                key={day.date_epoch}
            />
            )}
        </div>

}

export default Weathercards
