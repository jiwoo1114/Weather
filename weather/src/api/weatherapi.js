import axios from 'axios';

// 기본 URL과 헤더를 설정한 axios 인스턴스 생성
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const AUTH_KEY =  process.env.REACT_APP_WEATHER_API_KEY

//동적을 위한 api 키 요소 
//const apiKey = "12a7c2e02e8360441720bcab20b37aed";

// api call을 준비하기 위한 axios 인스턴스 생성
const weatherApi = axios.create({
  baseURL: BASE_URL,  // 기본 URL 설정 https://api.openweathermap.org/data/2.5/
  headers: {
      accept: 'application/json',  // 응답을 JSON 형태로 받기
      Authorization:AUTH_KEY 
  }
});

//공통 ApI 호출 함수
const fetchFromApi = async (url, params = {}) => {
   try {
      // params에 API 키 추가
      const response = await weatherApi.get(url, {
         params: {
            ...params,             // 전달받은 params를 그대로 확장
            appid: AUTH_KEY,    // OpenWeatherMap에서는 appid 파라미터로 API 키를 받음
         },
      });
      console.log('api 응답 데이터:', response.data);
      return response.data
   } catch (error) {
      console.error(`서버 오류: ${error.message}`)
      throw error  // 에러를 다시 던져서 호출한 곳에서 처리할 수 있게
   }
}



// 날씨 API 호출 함수(현재날씨,메인창 )
// 현재날씨 정보 요청 함수
export const getWeather = (q = 'incheon') => {

   return fetchFromApi('/weather', {
      q,
      units:'metric',
      lang:'kr',
   })
}

//5일 날씨를 3시간마다 갱신해서 알려주는 함수
export const getWeeksWeather = (q = 'incheon') => {
   return fetchFromApi(`/forecast`, {
      lang: 'kr',
      q,
      units: 'metric',
   })
}


// 공기질 정보 API 호출 함수(미세먼지)
// 공기질 정보 요청 함수
export const getAirPollution = async (q='incheon') => {
   try {
      //getWeather 함수에서 경도위도 값 가져오기
      const Weatherpolice = await getWeather(q)
      const { coord } = Weatherpolice.data

      // 위도와 경도를 사용하여 대기 상태 정보 가져오기
      return fetchFromApi(`/air_pollution`, {
         lat: coord.lat,
         lon: coord.lon,
      })

   } catch (error) {
      console.error("공기질 정보 오류.", error);
   }
}



export default  weatherApi