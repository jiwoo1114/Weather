import './styles/common.css'

import Menu from './page/Menu'
import Dust from './page/Dust'
import NotFound from './page/NotFound'
import TodayWeather from './page/TodayWeather'
import WeatherNews from './page/WeatherNews'
import { Route, Routes } from 'react-router-dom'




function App() {   
   return ( 
      <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/Dust' element={<Dust /> } />
      <Route path='/TodayWeather' element={<TodayWeather /> } />
      <Route path='/WeatherNews' element={<WeatherNews />} />
      <Route path='/*' element={<NotFound />} />
      </Routes>
   );
}

export default App;
