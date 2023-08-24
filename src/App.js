import './App.css';
import { Fragment } from 'react';
import LoginForm from './LoginForm';
import Nav from './Nav';

// This is the main component. It draws the Nav element and centers the
// LoginForm horizontally as well as vertically.

function App() {
  return (
    <Fragment>
      <Nav />
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <LoginForm />
      </div>
    </Fragment>
  );
}

export default App;
