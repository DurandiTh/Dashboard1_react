// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Dashboard() {
//     return ( 
//         <div>
//             <FontAwesomeIcon></FontAwesomeIcon>
//             kk

//         </div>
//      );
// }

// export default Dashboard;

// src/Header.js
import React from 'react';
import '../style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faXmark} from '@fortawesome/free-solid-svg-icons'

import userAvatar from '../assets/1.png'; // Replace this with the path to your actual image
import PersonPhoto from '../assets/person1.jpg';
const Dashboard = () => {
  return (
    <div className='rr'>
    <div className="header">
         <h2 className='hh'>Dashboard</h2>
      <div className="icons">
       
        <FontAwesomeIcon icon={faBell} className="bell" />
        {/* NO */}
       
        <div>
         
        <img src={PersonPhoto} alt="User Avatar" className="avatar"  />
        {/* <FontAwesomeIcon icon={icon} color={color} size="lg" /> */}
        </div>
        {/* NO */}
        <FontAwesomeIcon icon={faChevronDown} className="dropdown" />
      </div>
    </div>

   <div className='cc'>
    <div className='first'>
      <div className='ff'>
        <h1>Welcome back, John Doe</h1>
        <FontAwesomeIcon icon={faXmark}  className='gg'/> 
        </div>
   
        <p>The end of the year is coming . Are you planning your performance interview? You can do this super efficiently with Acmy</p>
        {/* <link>Look here for more informatioa</link>
        */}
      <a className="li" href='#'>Look here for more information</a>
      
    </div>
   
   
    
   </div>
    </div>
    
  );
};

export default Dashboard;
