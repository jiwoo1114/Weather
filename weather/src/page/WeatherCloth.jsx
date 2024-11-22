//날씨별 옷 추천창

import React from 'react';
import '../styles/common.css'
import Menubar from '../components/Menubar';
import Sidebar from '../components/Sidebar'
import Cloth from '../components/Cloth'
import { Wrap, Main } from '../styles/styled';
import Footer from '../components/Footer';


const Dust = () => {
    return (
        <Wrap>
            <Menubar />
            <Sidebar/>
            <Main>
            <Cloth></Cloth>
            </Main>
            <Footer/>
         </Wrap>
    );
};

export default Dust;
