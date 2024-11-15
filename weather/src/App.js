import './styles/common.css'

import Main from './page/Main'
import Dust from './page/Dust'
import NotFound from './page/NotFound'
import TodayWeather from './page/TodayWeather'
import WeatherNews from './page/WeatherNews'
import {Route,Routes} from 'react-router-dom';


function App() {
   <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy&display=swap" rel="stylesheet"></link>
   
  return ( 
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Dust' element={<Dust /> } />
      <Route path='/TodayWeather' element={<TodayWeather /> } />
      <Route path='/WeatherNews' element={<WeatherNews />} />
      <Route path='/*' element={<NotFound />} />
      </Routes>
   );
}

export default App;
