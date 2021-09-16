import { useState, useEffect } from 'react'
import Weathercards from './components/Weathercards'
import Search from './components/Search'
import Title from './components/Title'
import axios from 'axios'





function App() {
  const [forecast, setForecast] = useState([])
  const [city, setCity] = useState('Maebashi')
  const [isLoading, setIsLoading] = useState(true)

  // Get data from weather API
  const API_KEY = '39fdfe18baad480f9f462829211509'


  // Axios api call using useEffect
  useEffect(() => {
    const fetchForecast = async () => {
      const result = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`)
      setForecast(result.data.forecast.forecastday)
      setIsLoading(false)
    }
    fetchForecast()
  }, [city])

  console.log(forecast)




  return (
    <div>
      <div className="container">
        <Title city={city} />
        <Search setCity={setCity} />
        <Weathercards
          forecast={forecast}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
