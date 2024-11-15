//첫번째 메인화면

import '../styles/common.css'
import Menubar from '../components/Menubar';
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Wrap,Main2 } from '../styles/styled';

 function Main() {
     return ( 
         <Wrap>
             <Menubar />
             <Sidebar/>
             <Main2></Main2>
             <Footer/>       
         </Wrap>
         
    )
 }

export default Main;