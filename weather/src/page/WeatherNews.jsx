//뉴스창
import React from 'react';
import '../styles/common.css'
import Menubar from '../components/Menubar';
import { Wrap,Main } from '../styles/styled';
import Sidebar from '../components/Sidebar';
import Newslist from '../components/Newslist'



const WeatherNews = () => {
    return (
         <Wrap>
            <Menubar /> 
            <Sidebar/>
             <Main>
                 <Newslist></Newslist>
             </Main>
         </Wrap>

    );
};

export default WeatherNews;
