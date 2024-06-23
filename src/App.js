
import './App.css';
import Rightside from './Rightside';
import Activity from './component/Activity';
import Dashboard from './component/Dashboard';

import Piecharttt from './component/Piecharttt';
import Sidebar from './component/Sidebar';
import Tasks from './component/Tasks';
// import Sidebar from './component/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* <Sidebar></Sidebar> */}
      {/* <Dashboard></Dashboard> */}
      {/* <Tasks></Tasks> */}
      {/* <Activity></Activity> */}
     
     {/* <Piecharttt></Piecharttt> */}
     <Sidebar></Sidebar>
     <Rightside></Rightside>
    </div>
  );
}

export default App;
