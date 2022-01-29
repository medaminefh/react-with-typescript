import {useState} from 'react';

type AuthUser = {
    name:string
    email:string
}

function User() {

    const [user, setUser] = useState<AuthUser |null>(null)

    const handleLogin = () => setUser({
        name:"Med amine fh",
        email:"medaminefh@gmail.com"
    })

    const handleLogout = () => setUser(null)

  return <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    <h2>Name:{user?.name} | Email:{user?.email}</h2>
  </div>;
}

export default User;
