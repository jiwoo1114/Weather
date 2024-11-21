import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, MenuItem, Select, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { fetchWeeksWeather } from '../feauturs/Weather/WeatherSlice'; 

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

// 날짜와 요일을 'YYYY-MM-DD (요일) 오전/오후 HH:mm' 형식으로 변환하는 함수
const formatDateWithDayAndTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // timestamp는 초 단위이므로 밀리초로 변환
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  
  // 날짜 형식: "YYYY-MM-DD"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
  const day = String(date.getDate()).padStart(2, "0"); // 날짜가 한 자리 수일 때 0을 추가

  // 요일 추출
  const dayOfWeek = daysOfWeek[date.getDay()];

  // 시간 추출 및 오전/오후 구분
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  // 결과: "YYYY-MM-DD (요일) 오전/오후 HH:mm"
  return `${year}-${month}-${day} (${dayOfWeek}) ${period} ${formattedHours}:${minutes}`;
};

function Todayslider({ visibleCards }) {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("Incheon");

  // Redux 상태 가져오기
  const { weeksweather, loading, error } = useSelector((state) => state.todayweather);

  // 컴포넌트가 마운트되거나 선택된 도시가 변경될 때 API 호출
  useEffect(() => {
    dispatch(fetchWeeksWeather(selectedCity)); 
  }, [dispatch, selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  if (loading) {
    return <div>날씨 정보를 불러오는 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  // visibleCards만큼 날씨 카드 표시
  const displayedWeather = weeksweather?.list?.slice(0, visibleCards) || [];


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "20px" }}>
      <h1>도시별 주간 날씨</h1>

      {/* 도시 선택 */}
      <FormControl>
        <Select value={selectedCity} onChange={handleCityChange} displayEmpty>
          {koreanCities.map((city) => (
            <MenuItem key={city.name} value={city.name}>
              {city.korean}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 날씨 카드 */}
      {weeksweather && weeksweather.list && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
         {displayedWeather.map((day, index) => {
            const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`;
            const temp = day.main.temp;
            const description = day.weather[0].description;
            const dateWithDayAndTime = formatDateWithDayAndTime(day.dt);  // 날짜, 요일, 시간 추출

            return (
              <Card key={index} sx={{ maxWidth: 200 }}>
                <CardMedia component="img" image={iconUrl} alt={description} sx={{ height: 100 }} />
                <CardContent>
                  <Typography variant="h5">{dateWithDayAndTime}</Typography>  {/* 날짜, 요일, 시간대 추가 */}
                  <Typography variant="h6">{description}</Typography>
                  <Typography variant="body2">온도: {temp}°C</Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Todayslider;
