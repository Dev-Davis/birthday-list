import React from 'react';
import './App.css';
import {
  BrowserRouter as
    Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Components/Home/Home'
import WishList from './Components/Presents/Presents'
import Guests from './Components/Guests/Guests'

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = props => (authed === true
//     ? (<Component authed={authed} {...props} {...rest} />)
//     : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));
//   return <Route {...rest} render={props => routeChecker(props)} />;
// };

class App extends React.Component {
  state = {
    authed: false
  }
  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <PublicRoute path="/home" component={Home} authed={authed} />
            <PublicRoute path="/wishlist" component={WishList} authed={authed} />
            <PublicRoute path="/guests" component={Guests} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
