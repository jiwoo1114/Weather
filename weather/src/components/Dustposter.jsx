import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useCallback } from 'react'
import { fetchairpollution } from '../feauturs/Dust/DustSlice'

function Dustposter() {

   
    const dispatch = useDispatch();

    // redux 상태 가져오기
    const { air, loading, error } = useSelector((state) => state.airpollution);

    // 컴포넌트가 마운트되면 공기질 데이터를 가져오는 액션 디스패치
    useEffect(() => {
        // 경도, 위도를 객체 형태로 전달
        dispatch(fetchairpollution({ lat: 37.45, lon: 126.4161 }));  // 초기 경도,위도 값 전달
    }, [dispatch]);

    // 로딩 상태 처리
    if (loading) {
        return <div>날씨 정보를 불러오는 중...</div>;
    }

    // 에러 처리
    if (error) {
        return <div>에러 발생: {error}</div>;
    }

    // air 데이터가 null이 아니고 list가 있을 때 출력
    if (air && air.list && air.list.length > 0) {
        const components = air.list[0].components;
        const aqi = air.list[0].main.aqi;

        return (
            <div>
                <h2>공기질 정보</h2>
                <ul>
                    <li>AQI: {aqi}</li>
                    <li>CO: {components.co} µg/m³</li>
                    <li>NO: {components.no} µg/m³</li>
                    <li>NO2: {components.no2} µg/m³</li>
                    <li>O3: {components.o3} µg/m³</li>
                    <li>SO2: {components.so2} µg/m³</li>
                    <li>PM2.5: {components.pm2_5} µg/m³</li>
                    <li>PM10: {components.pm10} µg/m³</li>
                    <li>NH3: {components.nh3} µg/m³</li>
                </ul>
            </div>
        );
    }

    return <div>공기질 데이터가 없습니다.</div>;  // air 데이터가 없을 때
}



export default Dustposter;