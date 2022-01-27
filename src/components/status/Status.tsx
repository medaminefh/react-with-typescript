type StatusProps = {
    status:"loading" | "success" | "error"
}


function Status(props:StatusProps) {
    let msg

    if(props.status === "loading") {
        msg = "Loading..."
    }else if(props.status === "success") {
        msg = "Data fetched successfully"
    }else if (props.status === "error") {
        msg = "Error with fetching data"
    }



  return <div>
      <h2>
          {msg}
          </h2>
  </div>;
}

export default Status;
