
import { NavLink } from 'react-router-dom';
import './CSS/Menubar.css'
//import '../styles/common.css'


function Menubar() {
    return (      
        <header>
            <div className='"header-container"'>
                <ul className='"nav-list"'>
                    <li>
                        <NavLink to='/'>
                            <img src="/images/구름 로고.PNG" alt="구름" />
                        </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink to='TodayWeather'>
                            <img src="/images/해 로고.PNG" alt="해" />
                            <p>오늘날씨</p>
                        </NavLink>
                    </li>
                    <li className='list'> 
                        <NavLink to='Dust'>
                             <img src="/images/마스크 로고.PNG" alt="마스크" />
                            <p>미세먼지</p>
                        </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink to='weatherNews'>
                            <img src="/images/무지개 로고.PNG" alt="무지개" />
                            <p>날씨's 정보</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
     );
}

export default Menubar;