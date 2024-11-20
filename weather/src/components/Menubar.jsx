
import { NavLink } from 'react-router-dom';
import './CSS/Menubar.css'
import { GiClothes } from "react-icons/gi";
import { CiCloudSun } from "react-icons/ci";
import { PiRainbowCloudFill } from "react-icons/pi";
import { FaCloud } from "react-icons/fa";
//import '../styles/common.css'


function Menubar() {
    return (      
        <header>
            <div className='"header-container"'>
                <ul className='"nav-list"'>
                    <li>
                        <NavLink to='/'>
                            <FaCloud  className="custom-icon" />
                        </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink to='TodayWeather'>
                            <CiCloudSun />
                            <p>오늘날씨</p>
                        </NavLink>
                    </li>
                    <li className='list'> 
                        <NavLink to='WeatherCloth'>
                            <GiClothes/>
                            <p>날씨별 Daily</p>
                        </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink to='weatherNews'>
                            <PiRainbowCloudFill />
                            <p>날씨's 정보</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
     );
}

export default Menubar;