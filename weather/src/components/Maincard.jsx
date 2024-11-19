import '../styles/common.css'
import './CSS/MainCard.css'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useCallback} from 'react'
import { fetchTodayWeather } from '../feauturs/Weather/WeatherSlice';  // fetchFromApi 함수
import { FaSearch } from "react-icons/fa";



function Maincard() {
      
    const dispatch = useDispatch();
    
        //redux 상태 가져오기
        const { weather, loading, error } = useSelector((state) => state.todayweather);

        //컴포넌트가 마운트되면 날씨 데이터를 가져오는 액션 디스패치
        useEffect(() => {
            dispatch(fetchTodayWeather('incheon'));  // 원하는 도시 이름을 전달(초기값: 인천)
        }, [dispatch]);

       //로딩상태 처리
        if (loading) {
            return <div>날씨 정보를 불러오는 중...</div>;
        }
        //에러 처리
        if (error) {
            return <div>에러 발생: {error}</div>;
    }
        //?=optional Chaning 연산자:객체가 null이나 underfined일 경우 코드가 중단되지 않고 안전하게 실행
        const tempMin = weather?.main?.temp_min; // 최저 온도
        const tempMax = weather?.main?.temp_max; // 최고 온도
        const sunrise = new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(); // 일출
        const sunset = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString(); // 일몰
        const windSpeed = weather?.wind?.speed; // 풍속
        const windarrow = weather?.wind?.deg; //풍향


  
    return (
        
        <div className='wrap'>
            <h1>현재 인천의 날씨</h1>
            <div className='contents temp'>
                <div>
                <img src="./images/기온.PNG" alt="기온" />
                </div>
                <p>최고 기온 {tempMax}</p>
                <p>최저 기온 {tempMin}</p>
            </div>
            <div className='contents sun'>
                <div>
                <img src="./images/해달.PNG" alt="기온" />
                </div>
                <p>일출 {sunrise}</p>
                <p>일몰 {sunset}</p>
            </div>
            <div className='contents wind'>
                <div>
                <img src="./images/바람.PNG" alt="기온" />
                </div>
                <p>풍속:{windSpeed}m/s</p>
                <p>풍향:{windarrow}deg</p>
            </div>
            <div className='form'>
                <input placeholder='지역명을 입력하세요' type='text' className='text'></input>
                <button type='submit'>
                    <FaSearch />
                </button>
            </div>
        </div> 
        );
    
}

export default Maincard;
