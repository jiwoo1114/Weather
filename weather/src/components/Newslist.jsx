import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useCallback } from 'react'
import { fetchWeeksWeather } from '../feauturs/Weather/WeatherSlice';  // fetchFromApi 함수
import '../styles/common.css'
import './CSS/Newslist.css'

import 'swiper/css'; //기본swiper css
import 'swiper/css/navigation'; //네비게이션 버튼
import 'swiper/css/pagination'; //페이지네이션
import 'swiper/css/scrollbar'; //스크롤바

function  Todayslider() {
      
    const dispatch = useDispatch();
    
    //redux 상태 가져오기
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
        const icon = weeksweather?.weather?.[0]?.icon;
        const description = weeksweather?.weather?.[0]?.description;
        const feelsLike = weeksweather?.main?.feels_like;


    return (
        <h1>주일날씨 예보 준비중</h1>
    )
}

export default Todayslider
    