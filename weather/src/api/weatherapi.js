import axios from 'axios';

// 기본 URL과 헤더를 설정한 axios 인스턴스 생성
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const AUTH_KEY = process.env.REACT_APP_WEATHER_API_KEY

//동적을 위한 api 키 요소 
const apiKey = "12a7c2e02e8360441720bcab20b37aed";

// api call을 준비하기 위한 axios 인스턴스 생성
const weatherApi = axios.create({
  baseURL: BASE_URL,  // 기본 URL 설정
  headers: {
      accept: BASE_URL,  // 응답을 JSON 형태로 받기
      AUTH_KEY: AUTH_KEY,
  }
});

//공통 ApI 호출 함수
const fetchFromApi = async (url, params = {}) => {
   try {
      // params에 API 키 추가
      const response = await simplewApi.get(url, {
         params: {
            ...params,             // 전달받은 params를 그대로 확장
            appid: AUTH_KEY,    // OpenWeatherMap에서는 appid 파라미터로 API 키를 받음
         },
      })
      return response
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error  // 에러를 다시 던져서 호출한 곳에서 처리할 수 있게
   }
}



// 날씨 API 호출 함수(현재날씨,메인창 )
// 날씨 정보 요청 함수
async function getWeather(cityName) {
   const url = 'https://api.openweathermap.org/data/2.5/weather';  // 날씨 API 엔드포인트
   const params = {
      q: cityName,          // 도시 이름
      units: 'metric',      // 온도 단위 (섭씨)
      lang: 'kr',           // 언어 설정 (한국어)
   };
   try {
      const data = await fetchFromApi(url, params);  // 공통 API 호출 함수 사용
      console.log("날씨 정보:", data);
      // 여기서 data는 응답 받은 날씨 정보 객체입니다. 이를 원하는 형태로 가공하거나 UI에 표시할 수 있습니다.
   } catch (error) {
      console.error("날씨 정보를 가져오는 데 실패했습니다.", error);
   }
}


// 공기질 정보 API 호출 함수(미세먼지)
// 공기질 정보 요청 함수
async function getAirPollution(lat, lon) {
   const url = 'https://api.openweathermap.org/data/2.5/air_pollution';  // 공기질 API 엔드포인트
   const params = {
      lat: lat,    // 위도
      lon: lon,    // 경도
   };
   try {
      const data = await fetchFromApi(url, params);  // 공통 API 호출 함수 사용
      console.log("공기질 정보:", data);
      // 여기서 data는 응답 받은 공기질 정보 객체입니다. 이를 원하는 형태로 가공하거나 UI에 표시할 수 있습니다.
   } catch (error) {
      console.error("공기질 정보를 가져오는 데 실패했습니다.", error);
   }
}



