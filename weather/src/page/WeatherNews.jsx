//뉴스창
import React from 'react';
import '../styles/common.css'
import Menubar from '../components/Menubar';
import { Wrap,Main } from '../styles/styled';
import Sidebar from '../components/Sidebar';
import Newslist from '../components/Newslist'
import Footer from '../components/Footer';
import { Button } from "@mui/material";
import { useState } from 'react';






const WeatherNews = () => {

 const [visibleCards, setVisibleCards] = useState(20); // 초기 표시 카드 수

    const handleLoadMore = () => {
        setVisibleCards((prev) => prev + 20); // 추가로 20개씩 표시
    };


    return (
         <Wrap>
            <Menubar /> 
            <Sidebar/>
             <Main>
                <Newslist visibleCards={visibleCards}></Newslist>
                 {/* 더보기 버튼 */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button variant='contained' onClick={handleLoadMore}>항목 더보기</Button>
                </div>
            </Main>
            <Footer/>
         </Wrap>

    );
};

export default WeatherNews;
