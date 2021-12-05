import React from 'react';
import ReactDOM from 'react-dom';
import FirstActivity from './FirstActivity.jsx';

import Header from './Header.jsx';
import './date.css';
import SmallActivity1 from './SmallActivity1.jsx';
import BottomNavBar from './BottomNavBar.jsx';


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">

        <FirstActivity/>
        <hr class="dash" />
        <h2 class="calls">JULY, 27 2017</h2>
        {/* <FirstActivity/> */}
        <SmallActivity1/>
        <hr class="dash" />
        <h2 class="calls">JULY, 27 2017</h2>
        <SmallActivity1/>
        <hr class="dash" />
        <h2 class="calls">JULY, 27 2017</h2>
        <SmallActivity1/>
        <hr class="dash" />
        <h2 class="calls">JULY, 27 2017</h2>
        <SmallActivity1/>
        <hr class="dash" />
        <h2 class="calls">JULY, 27 2017</h2>




        <BottomNavBar/>
        
        
        </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
