import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWeather } from '../feauturs/Weather/WeatherSlice';  // 날씨 데이터 가져오는 액션
import { FaSearch } from 'react-icons/fa';
import './CSS/MainCard.css'
import '../styles/styled'

const koreanCities = [
  { name: "Goyang-si", korean: "고양" },
  { name: "Seoul", korean: "서울" },
  { name: "Incheon", korean: "인천" },
  { name: "Seongnam-si", korean: "성남" },
  { name: "Ansan-si", korean: "안산" },
  { name: "Yongin", korean: "용인" },
  { name: "Suwon-si", korean: "수원" },
  { name: "Hwaseong-si", korean: "화성" },
  { name: "Pyeongtaek-si", korean: "평택" },
  { name: "Cheongju-si", korean: "청주" },
  { name: "Daejeon", korean: "대전" },
  { name: "Daegu", korean: "대구" },
  { name: "Pohang", korean: "포항" },
  { name: "Jeonju", korean: "전주" },
  { name: "Ulsan", korean: "울산" },
  { name: "Gwangju", korean: "광주" },
  { name: "Gimhae", korean: "김해" },
  { name: "Changwon", korean: "창원" },
  { name: "Busan", korean: "부산" },
  { name: "Jeju City", korean: "제주" },
];

function Maincard() {
  const dispatch = useDispatch();

  // 상태 초기화
  const [city, setCity] = useState(''); // 사용자 입력값
  const [cityKorean, setCityKorean] = useState('도시를 입력하세요'); // 기본값
  const [cityEnglish, setCityEnglish] = useState(''); // 변환된 영어 도시명

  // Redux 상태 가져오기
  const { weather, loading, error } = useSelector((state) => state.todayweather);

  // city가 변경될 때마다 영어/한국어 도시명 업데이트
  useEffect(() => {
    const cityObj = koreanCities.find((item) => item.korean === city || item.name === city);
    if (cityObj) {
      setCityKorean(cityObj.korean); // 한국어 도시명 설정
      setCityEnglish(cityObj.name); // 영어 도시명 설정
    } else {
      setCityKorean('도시를 입력하세요'); // 유효하지 않으면 초기값 유지
      setCityEnglish(''); // 영어 도시명 초기화
    }
  }, [city]);

  // 날씨 데이터를 가져오는 함수
  const fetchWeather = () => {
    if (cityEnglish) {
      dispatch(fetchTodayWeather(cityEnglish)); // 영어 도시명으로 API 호출
    } else {
      alert('유효한 도시명을 입력해주세요.');
    }
  };

  // 로딩 상태 처리
  if (loading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  // 날씨 데이터 추출
  const tempMin = weather?.main?.temp_min; // 최저 온도
  const tempMax = weather?.main?.temp_max; // 최고 온도
  const sunrise = new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(); // 일출
  const sunset = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString(); // 일몰
  const windSpeed = weather?.wind?.speed; // 풍속
  const windarrow = weather?.wind?.deg; // 풍향

  // 입력값 변경 처리
  const handleCityChange = (event) => {
    setCity(event.target.value); // 사용자가 입력한 도시명 업데이트
  };

  return (
    <div className='wrap'>
          <h1>{cityKorean}</h1> {/* 한국어 도시명을 출력 */}
      <div className='contents temp'>
        <div>
          <img src="./images/기온.PNG" alt="기온" />
        </div>
        <p>최고 기온: {tempMax}°C</p>
        <p>최저 기온: {tempMin}°C</p>
      </div>
      <div className='contents sun'>
        <div>
          <img src="./images/해달.PNG" alt="해달" />
        </div>
        <p>일출: {sunrise}</p>
        <p>일몰: {sunset}</p>
      </div>
      <div className='contents wind'>
        <div>
          <img src="./images/바람.PNG" alt="바람" />
        </div>
        <p>풍속: {windSpeed} m/s</p>
        <p>풍향: {windarrow}°</p>
      </div>

      {/* 지역명 입력 폼 */}
      <div className='form'>
        <input
          placeholder='도시명을 입력하세요'
          type='text'
          value={city} // 입력된 값
          onChange={handleCityChange} // 입력값 변경 시 실행
          className='text'
        />
        <button type='button' onClick={fetchWeather}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Maincard;