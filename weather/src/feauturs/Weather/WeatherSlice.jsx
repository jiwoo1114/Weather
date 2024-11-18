import { getWeather }  from "../../api/weatherapi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 비동기 Thunk action - 현재 날씨 API에서 날씨 데이터를 가져옴
export const fetchTodayWeather = createAsyncThunk(
   "/todayweather/fetchTodayweather",
   async (q) => {
      const response = await getWeather(q);
      return response.data;
   }
);

// slice 생성
const WeatherSlice = createSlice({
   name: "todayweather",
   initialState: {
    loading: false,  // 로딩 여부
    weather: {},   // 날씨 데이터를 저장
    error: null,     // 에러 메시지를 저장
   },
   reducers: {
      resetWeather(state) {
         state.weather = null; // 날씨 데이터 초기화
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchTodayWeather.pending, (state) => {
            state.loading = true; // 로딩 중
            state.error = null; // 에러 초기화
         })
         .addCase(fetchTodayWeather.fulfilled, (state, action) => {
            state.weather = action.payload; // 응답 데이터 저장
            state.loading = false; // 로딩 완료
         })
         .addCase(fetchTodayWeather.rejected, (state, action) => {
            state.loading = false; // 로딩 완료
            state.error = action.error.message; // 에러 메시지 저장
         });
   },
});

export const { resetWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;
