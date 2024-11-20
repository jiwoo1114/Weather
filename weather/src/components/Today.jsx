import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWeather } from '../feauturs/Weather/WeatherSlice'; // 경로 수정
import './CSS/Today.css'

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


const Today = () => {
  const [city, setCity] = useState(""); // 한국어로 입력된 도시명
  const [englishCity, setEnglishCity] = useState(""); // 영어 도시명
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.todayweather);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = () => {
    const cityData = koreanCities.find((cityItem) => cityItem.korean === city);
    if (cityData) {
      setEnglishCity(cityData.name);
      dispatch(fetchTodayWeather(cityData.name));
    } else {
      alert("해당 도시를 찾을 수 없습니다.");
    }
  };

  if (loading) {
    return <h1>날씨 정보를 불러오는 중...</h1>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  const iconCode = weather?.weather?.[0]?.icon;
  const description = weather?.weather?.[0]?.description;
  const feelsLike = weather?.main?.feels_like;

  const iconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}@4x.png` : "";

  return (

    <>
      <h1>지역별 오늘의 날씨</h1>
      <div className='muiform'>
        <h3 style={{fontWeight:'bold'}}>도시명:{city}</h3>
      <TextField
        label="도시이름을 검색하세요"
        variant="outlined"
        value={city}
          onChange={handleCityChange}
          sx={{ mb: 2 ,mt: 2}} 
      />
      <Button
        variant="contained"
        onClick={handleFetchWeather}
        sx={{  mt: 1 }}
      >
        검색
      </Button>

      {weather && (
          <Card sx={{
           
            maxWidth: 345, mt: 2
          }}>
          <CardMedia
            component="img"
            image={iconUrl}
            alt={description}
            sx={{ height: 140 }}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              체감 온도: {feelsLike}°C
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
    </>
  );
};

export default Today;