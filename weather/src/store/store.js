import { configureStore } from "@reduxjs/toolkit";
import todayweatherReducer from '../feauturs/Weather/WeatherSlice'
import airpollutionReducer from '../feauturs/Dust/DustSlice'

   const store = configureStore({
    reducer: {
        todayweather: todayweatherReducer,
        airpollution:airpollutionReducer,
    }
})

export default store