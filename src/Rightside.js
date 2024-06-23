import Activity from "./component/Activity";
import Dashboard from "./component/Dashboard";
import Piecharttt from "./component/Piecharttt";
import Tasks from "./component/Tasks";
import './Rightside.css'

function Rightside() {
    return ( 
        <div>
            <Dashboard></Dashboard>
        <div className="container">
        <div className="task-list-container">
            <Tasks></Tasks>
        </div>
        <div className="second">
        <div className="activity-feed-container">
           <Activity></Activity> 
        </div>
        <div className="tasks-by-priority-container">
           <Piecharttt></Piecharttt>
         </div>
         </div>
        </div>
        </div>
       
    );
}

export default Rightside;