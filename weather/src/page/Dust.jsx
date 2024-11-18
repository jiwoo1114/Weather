//미세먼지창

import React from 'react';
import '../styles/common.css'
import Menubar from '../components/Menubar';
import Sidebar from '../components/Sidebar'
import { Wrap,Main } from '../styles/styled';


const Dust = () => {
    return (
        <Wrap>
            <Menubar />
            <Sidebar/>
            <Main>

            </Main>
         </Wrap>
    );
};

export default Dust;
