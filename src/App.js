import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Topbar from './components/Topbar';
import Pagecontent from './components/Pagecontent';
import Graph from './components/Graph';
import 'bootstrap/dist/css/bootstrap.css';

let sideBarItems = [
  { title: 'Interface', elements: ['Components', 'Utilities'] },
  { title: 'Addons', elements: ['Pages', 'Charts', 'Tables'] },
];

let dashboardItems = [
  { title: 'Earnings(Monthly)', value: '$40,000' },
  { title: 'Earnings(Annual)', value: '$215,000' },
  { title: 'Tasks', value: '50%' },
  { title: 'Pending requests', value: 18 },
];

function App() {
  return (
    <div id="wrapper">
      <Sidebar items={sideBarItems} />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <Pagecontent dboardItems={dashboardItems} />
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
