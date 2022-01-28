import React from "react"
import Greet from "./components/greet/Greet"
import Lists from "./components/lists/Lists"
import Status from "./components/status/Status"
import Button from "./components/button/button"
import Form from "./components/input/input"

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
      <Button handleClick={() => console.log("Hello world")} />
      <Form handleChange={(e) => console.log("this is from the change event",e)} handleSubmit={(e)=> e.preventDefault()}>
        <Button handleClick={() => console.log("YAy")} />
      </Form>
    </div>
  );
}

export default App;
