import { configureStore } from "@reduxjs/toolkit";
import todayweatherReducer from '../feauturs/Weather/WeatherSlice'
import airpollutionReducer from '../feauturs/Dust/DustSlice'

   const store = configureStore({
    reducer: {
        weather: todayweatherReducer,
        air:airpollutionReducer,
    }
})

export default store