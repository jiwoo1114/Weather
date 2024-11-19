import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useCallback } from 'react'
import { fetchWeeksWeather } from '../feauturs/Weather/WeatherSlice';

function Newslist() {

    const  dispatch=useDispatch()
    const { weeksweather, loading, error } = useSelector((state) => state.todayweather);

        //컴포넌트가 마운트되면 날씨 데이터를 가져오는 액션 디스패치
        useEffect(() => {
            dispatch(fetchWeeksWeather('incheon'));  // 원하는 도시 이름을 전달(초기값: 인천)
        }, [dispatch]);

       //로딩상태 처리
        if (loading) {
            return <div>날씨 정보를 불러오는 중...</div>;
        }
        //에러 처리
        if (error) {
            return <div>에러 발생: {error}</div>;
    }


    return (<>
        
        <div>
            <h1>5일간 날씨</h1>
            {weeksweather.list.map((day, index) => (
                <div key={index}>
                    <p>날짜: {day.dt_txt}</p>
                    <p>온도: {day.main.temp}°C</p>
                    <p>날씨: {day.weather[0].description}</p>
                </div>
            ))}
        </div>

    </>);
}

export default Newslist;