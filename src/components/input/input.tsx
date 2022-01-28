import React from "react";
import Button from "../button/button";

type InputProps = {
    children?:React.ReactNode // optional
    handleSubmit:(e:React.FormEvent<HTMLFormElement>) => void
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props:InputProps) {

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("from inside the component!")
    }

  return <form onSubmit={props.handleSubmit}>
      <fieldset>
          <label htmlFor="">Name:</label>
          <input onChange={props.handleChange} type={"text"} placeholder="Name" />
      </fieldset>
            <fieldset>
          <label htmlFor="">Email:</label>
          <input onChange={handleInputChange} type={"text"} placeholder="Email" />
      </fieldset>
            <fieldset>
          <label htmlFor="">Password:</label>
          <input type={"text"} placeholder="Password" />
      </fieldset>
      <Button handleClick={()=> console.log("From The Form")} />
      {props.children}
  </form>;
}

export default Input;
