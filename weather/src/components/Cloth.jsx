import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchTodayWeather } from '../feauturs/Weather/WeatherSlice';
import {
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from '@mui/material';
import '../styles/common.css';
import './CSS/Cloth.css';

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
  const [selectedCity, setSelectedCity] = useState('Seoul');
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.todayweather);

  useEffect(() => {
    dispatch(fetchTodayWeather(selectedCity));
  }, [selectedCity, dispatch]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const getClothingRecommendation = (temp) => {
    if (temp >= 30) return { emoji: '☀️', message: '반팔, 반바지 추천!' };
    if (temp >= 20) return { emoji: '👕', message: '얇은 겉옷 추천!' };
    if (temp >= 10) return { emoji: '🧥', message: '가디건, 자켓 추천!' };
    return { emoji: '🧣', message: '두꺼운 옷 추천!' };
  };

  const clothing = weather ? getClothingRecommendation(weather.main.temp) : null;

  if (loading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  return (
    <div style={{
      padding: '20px', textAlign: 'center', marginLeft: '100px', 
    }}>
      <h1>전국 날씨별 옷 추천</h1>
     <div className='formbox'>
      <Select
        value={selectedCity}
        onChange={handleCityChange}
        variant="outlined"
        sx={{ marginBottom: 2}}
      >
        {koreanCities.map((city) => (
          <MenuItem key={city.name} value={city.name}>
            {city.korean}
          </MenuItem>
        ))}
      </Select>
      {weather && (
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card  sx={{ width: '400px', height: '350px', marginLeft:'70px'}}>
              <CardContent>
                <Typography variant="h5"  sx={{ marginBottom: '10px' }}>추천 의상</Typography>
                <Typography variant="h1" sx={{ marginBottom: '20px', border:'none', padding:'20px'}}>{clothing?.emoji}</Typography>
                <Typography variant="body1" sx={{fontSize:'20px',marginTop:'50px',fontWeight:'bold'}}>{clothing?.message}</Typography>
              </CardContent>
            </Card>
            </Grid>
            
          <Grid item xs={12} sm={6}>
            <Card sx={{ width: '400px', height: '350px' }}>
              <Typography variant="h5" sx={{  padding:'10px',marginTop:'20px'}}>오늘 날씨
                </Typography>
              <CardMedia
                component="img"
                image={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt={weather.weather[0].description}
                sx={{ width:'150px',height: '150px', padding:'10px 0',marginLeft:'125px' }}
                />
                
              <CardContent>
                  <Typography variant="h5" sx={{fontWeight:'bold'}}>{weather.weather[0].description}</Typography>
                <Typography variant="body1">
                  현재 온도: {weather.main.temp}°C
                </Typography>
                </CardContent>
                
            </Card>
          </Grid>
        </Grid>
      )}
      </div> 
    </div>
  );
}

export default Cloth;