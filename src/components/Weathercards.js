import React from 'react'
import Weathercard from './Weathercard'

const Weathercards = ({ forecast, isLoading }) => {
    const getDayOfWeek = (date) => {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }

    return isLoading ? <div className='weather-cards-group'
    >Loading...</div> :
        <div className='weather-cards-group'>
            {forecast.map((day) => <Weathercard
                day={getDayOfWeek(day.date)}
                icon={day.day.condition.icon}
                temp={`${Math.round(day.day.maxtemp_c)}°/${Math.round(day.day.mintemp_c)}°`}
                key={day.date_epoch}
            />
            )}
        </div>

}

export default Weathercards
