//지역별 오늘날씨창

import React from 'react';
import '../styles/common.css'
import Menubar from '../components/Menubar';
import Sidebar from '../components/Sidebar'
import { Wrap,Main } from '../styles/styled';
import Today from '../components/Today';
import Footer from '../components/Footer';


const TodayWeather = () => {
    return (
        <Wrap>
            <Menubar/> 
            <Sidebar/>
             <Main $padding="30px 0">
                 <Today></Today>
            </Main>
            <Footer/>
         </Wrap>

    );
};

export default TodayWeather;