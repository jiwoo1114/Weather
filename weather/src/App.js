import './styles/common.css'

import Menu from './page/Menu'
import WeatherCloth from './page/WeatherCloth'
import NotFound from './page/NotFound'
import TodayWeather from './page/TodayWeather'
import WeatherNews from './page/WeatherNews'
import { Route, Routes } from 'react-router-dom'




function App() {   
   return ( 
      <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/WeatherCloth/*' element={<WeatherCloth /> } />
      <Route path='/TodayWeather/*' element={<TodayWeather /> } />
      <Route path='/WeatherNews/*' element={<WeatherNews />} />
      <Route path='/*' element={<NotFound />} />
      </Routes>
   );
}

export default App;
