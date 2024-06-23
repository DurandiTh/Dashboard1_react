import { useState } from "react";
import '../style/Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import userAvatar from '../assets/1.png'; // Replace this with the path to your actual image
import PersonPhoto1 from '../assets/per2.jpg';
import PersonPhoto2 from '../assets/per3.jpg';


function Activity() {

    const [activityData, setActivityData] = useState([
        {
          id: 1,
          user: 'John Doe',
          action: 'created',
          content: 'Contract #00124',
          timestamp: 'Sep 16, 2022 at 11:30 AM',
        },
        {
          id: 2,
          user: 'Jane Smith',
          action: 'signed',
          content: 'Contract #00124',
          timestamp: 'Sep 16, 2022 at 11:45 AM',
        },
        // Add more dummy data objects as needed
      ]);
      
    return (  
        <div className="activity_feed">
        <h2>Activity Feed</h2>
        <table className="uu">
          {activityData.map((item) => (
            <tbody key={item.id}>
            <td>

            </td>
            
            <img src={PersonPhoto1} alt="User Avatar" className="avatar" />
           

                <td>
              <span className="user">{item.user}</span> {/* Username */}
              <span className="action">{item.action}</span> {/* Action */}
              <span className="content">{item.content}</span> {/* Content */}
              <br></br>
              <span className="timestamp">{item.timestamp}</span> {/* Timestamp */}
              </td>
            </tbody>
          ))}
        </table>
      </div>
    );
}

export default Activity;