import React from "react"


interface Props {
  name : string
}

const App:React.FC<Props> = (props) =>{
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

export default App;
