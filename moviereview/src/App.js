import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Movie from './Movie';
import Home from './Home';
import Movielist from './Movielist';
import News from './News';
import Promotion from './Promotion';
import Login from './login';
import SignUP from './Signup';

function App() {
  return (
    <div className="App">
      <div className="header"><img className="logo" src={require('./movieimg/MovieReview.png').default} alt="Logo" /></div>


      <Router>
        <div className="Menu">
          <NavLink exact className="menu-item" activeClassName="active" to="/">หน้าหลัก</NavLink>
          <NavLink className="menu-item" activeClassName="active" to="/Movielist">ภาพยนตร์</NavLink>
          <NavLink className="menu-item" activeClassName="active" to="/News">ข่าว</NavLink>
          <NavLink className="menu-item" activeClassName="active" to="/Promotion">โปรโมชั่น</NavLink>
          <NavLink className="menu-item text-end" activeClassName="active" to="/Signin">เข้าสู่ระบบ</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Movielist" component={Movielist} />
          <Route exact path="/News" component={News} />
          <Route path="/Movie" component={Movie} />
          <Route exact path="/Promotion" component={Promotion} />
          <Route exact path="/Signin" component={Login} />
          <Route exact path="/Signup" component={SignUP} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
