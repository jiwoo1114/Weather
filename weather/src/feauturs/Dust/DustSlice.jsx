import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAirPollution } from "../../api/weatherapi";

// 비동기 Thunk 액션 - 공기질 API에서 데이터 가져오기
export const fetchairpollution = createAsyncThunk(
   "airpollution/fetchairpollution",
   async ({ lat, lon }) => {
      const response = await getAirPollution({ lat, lon }); // API 호출
      return response.data;
   }
);

// slice 생성
const AirpollutionSlice = createSlice({
   name: "airpollution",
   initialState: {
      loading: false, // 로딩 여부
      air: {},      // 공기질 데이터를 저장
      error: null,    // 에러 메시지 저장
   },
   reducers: {
      resetAirpollution(state) {
         state.air = null; // 공기질 데이터 초기화
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchairpollution.pending, (state) => {
            state.loading = true; // 로딩 중
            state.error = null;   // 에러 초기화
         })
         .addCase(fetchairpollution.fulfilled, (state, action) => {
            state.air = action.payload; // 공기질 데이터 저장
            state.loading = false;     // 로딩 완료
         })
         .addCase(fetchairpollution.rejected, (state, action) => {
            state.loading = false;         // 로딩 종료
            state.error = action.error.message; // 에러 메시지 저장
         });
   },
});

export const { resetAirpollution } = AirpollutionSlice.actions;
export default AirpollutionSlice.reducer;
