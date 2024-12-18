//첫번째 메인화면(입력 도시의 바람,기온,일출일몰)

import '../styles/common.css'
import Menubar from '../components/Menubar';
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Maincard from '../components/Maincard'
import { Wrap,Main } from '../styles/styled';

 function Menu() {
     return ( 
         <Wrap>
             <Menubar /> 
             <Sidebar/>
             <Main>
                 <Maincard></Maincard>
             </Main>
             <Footer/>
         </Wrap>
    )
 }

export default Menu;