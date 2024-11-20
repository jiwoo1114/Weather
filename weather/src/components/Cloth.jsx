import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useCallback } from 'react'
import { fetchTodayWeather, fetchWeeksWeather } from '../feauturs/Weather/WeatherSlice'
import { Select, MenuItem, Card, CardMedia, CardContent, Typography, FormControl, InputLabel, Button } from '@mui/material';
import '../styles/common.css'
import './CSS/Cloth.css'



// 한국어 도시명과 영어 도시명 배열
const koreanCities = [
  { name: 'Goyang-si', korean: '고양' },
  { name: 'Seoul', korean: '서울' },
  { name: 'Incheon', korean: '인천' },
  { name: 'Seongnam-si', korean: '성남' },
  { name: 'Ansan-si', korean: '안산' },
  { name: 'Yongin', korean: '용인' },
  { name: 'Suwon-si', korean: '수원' },
  { name: 'Hwaseong-si', korean: '화성' },
  { name: 'Pyeongtaek-si', korean: '평택' },
  { name: 'Cheongju-si', korean: '청주' },
  { name: 'Daejeon', korean: '대전' },
  { name: 'Daegu', korean: '대구' },
  { name: 'Pohang', korean: '포항' },
  { name: 'Jeonju', korean: '전주' },
  { name: 'Ulsan', korean: '울산' },
  { name: 'Gwangju', korean: '광주' },
  { name: 'Gimhae', korean: '김해' },
  { name: 'Changwon', korean: '창원' },
  { name: 'Busan', korean: '부산' },
  { name: 'Jeju City', korean: '제주' },
];


function Cloth() {
 
 const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const { weather, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    dispatch(fetchWeeksWeather(city));
  };

  // 날씨 정보가 로딩 중일 때
  if (loading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  // 에러 처리
  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  // 기온에 맞춰 옷 추천
  const getClothRecommendation = (temp) => {
    if (temp <= 10) {
      return {
        icon: '/cold-cloth-icon.png',
        description: '두꺼운 외투나 코트가 필요해요!',
      };
    } else if (temp <= 20) {
      return {
        icon: '/medium-cloth-icon.png',
        description: '가벼운 재킷이나 스웨터가 적당해요!',
      };
    } else {
      return {
        icon: '/light-cloth-icon.png',
        description: '가벼운 옷이나 반팔을 입어도 좋아요!',
      };
    }
  };

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchWeeksWeather(selectedCity));
    }
  }, [dispatch, selectedCity]);

  const iconUrl = `http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`;
  const temperature = weather?.main?.temp;

  const { icon, description } = getClothRecommendation(temperature);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>도시를 선택하세요</InputLabel>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          label="도시명"
        >
          {koreanCities.map((city) => (
            <MenuItem key={city.name} value={city.name}>
              {city.korean} ({city.name})
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {weatherData && (
        <div>
          <Card sx={{ maxWidth: 345, mt: 2 }}>
            <CardMedia component="img" height="140" image={iconUrl} alt="날씨 아이콘" />
            <CardContent>
              <Typography variant="h5" component="div">
                {weather?.weather[0]?.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                체감 온도: {weather?.main?.feels_like}°C
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, mt: 2 }}>
            <CardMedia component="img" height="140" image={icon} alt="옷 추천 아이콘" />
            <CardContent>
              <Typography variant="h6" component="div">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
    

export default Cloth;