type GreetType = {
    name:string
    message:string
    isLoggedIn:boolean
}



const Greet = (props:GreetType) => {
  return <div>
      {props.isLoggedIn? props.message : "You're not logged in"}
  </div>;
}

export default Greet;
