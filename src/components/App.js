import React, { Component } from 'react';
import NavLink from './NavLink';

// a few components from v4
import { BrowserRouter, Match, Miss, Link } from 'react-router';

// app components
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';

class App extends Component {
  render() {
    return (
      // 2. render a `Router`, it will listen to the url changes
//    and make the location available to other components
//    automatically
      <BrowserRouter>
        <div className="container">
          <header>
            <span className="icn-logo"><i className="material-icons">code</i></span>
            <ul className="main-nav">
              {/* 3. Link to some paths with `Link` */}
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/teachers">Teachers</NavLink></li>
              <li>
                <NavLink to="/courses"     
                  isActive={(location, props) => (
                    // make it active for "/courses" and "/course/123"
                    // Even though it's not technically active, it is
                    // theoretically for the sake of a navigation menu
                    location.pathname.match(/course(s)?/)
                  )}>Courses
                </NavLink>
              </li>
            </ul>       
          </header>

          {/* 4. Render some `<Match/>` components.
                 When the current location matches the `pattern`
                 then the `component` will render.
          */}
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/teachers" component={Teachers} />
          <Match pattern="/courses" component={Courses} />
          <Match pattern="/featured/:topic/:name" component={Featured} />
      
          {/* If none of those match, then a sibling `Miss` will render. */}
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;