import React from "react"
import Greet from "./components/greet/Greet"
import Lists from "./components/lists/Lists"
import Status from "./components/status/Status"

type AppProps = {
  children:React.ReactNode
}

const App = (props:AppProps) =>{

  const nameList = [
    {
      name:"Med Amine Fh",
      age:25
    },{
      name:"Alex",
      age:42
    },{
      name:"Haroun Fh",
      age:24
    },{
      name:"Jessica",
      age:20
    },{
      name:"Joe",
      age:35
    },
  ]
  return (
    <div>
      <Status status={"error"} />
      <Greet name={"medaminefh"} isLoggedIn={true} message={"Hello world"} />
      <Lists names = {nameList} />
    </div>
  );
}

export default App;
