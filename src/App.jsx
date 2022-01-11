import React from 'react';
import ReactDOM from 'react-dom';
import FirstActivity from './FirstActivity.jsx';
import BottomNavBar from './BottomNavBar.jsx';
import './css/header.css';


const App = () => {
  return (
    <div className='container'>
      {/* <Header/> */}
      <div className="container-view">

        {/* <FirstActivity/> */}
        <hr class="dash" />
        <h1 className="head">Sign In</h1>
        <label for="fname" className="email-text">Email</label><br></br>
        {/* <h2 class="calls">Email</h2> */}
        <input class="text"></input>
        <label for="fname" className="password-text">Password</label><br></br>
        <input class="text"></input>

        <input type="checkbox" ></input>
        <label>Remember me?</label>
        

<div className="cont">



<button type="button" className="button" onClick={event =>  window.location.href='/localhost:8000/api/login'}>Sign in</button>
        <h1 className="forgot">Forgot your password?</h1>
        <h1 className="account">Dont have an account? <span className="bold">Sign up</span></h1>
        {/* <h1 className="signup">Sign up</h1> */}
        <h1 className="email">Resend email confimration</h1>



</div>
       
        



       
        {/* <FirstActivity/> */}
        




       
        
        
        </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
