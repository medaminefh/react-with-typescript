import {useState} from 'react';

function State() {

    const [loggedIn, setLoggedIn ] = useState(false)

    const handleLogin = () => {
        setLoggedIn(true)
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }

  return <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>{loggedIn? "You're Logged In :) ":"You're Not Logged In :("}</h1>
  </div>;
}

export default State;
