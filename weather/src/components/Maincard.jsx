import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { fetchTodayWeather } from '../feauturs/Weather/WeatherSlice';  // fetchFromApi 함수

function Maincard() {
    
        const WeatherComponent = () => {
        const dispatch = useDispatch();
        const { weather, loading, error } = useSelector((state) => state.todayweather);

        useEffect(() => {
            dispatch(fetchTodayWeather('incheon'));  // 원하는 도시 이름을 전달
        }, [dispatch]);

        if (loading) {
            return <div>로딩 중...</div>;
        }

        if (error) {
            return <div>에러 발생: {error}</div>;
        }



        return (
            <div> 메인카드</div>
        );
    }
}

export default Maincard;
