import { configureStore } from "@reduxjs/toolkit";
import todayweatherReducer from '../feauturs/Weather/WeatherSlice'


   const store = configureStore({
    reducer: {
        todayweather: todayweatherReducer,
    }
})

export default store