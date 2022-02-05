import { Button } from "../button/button";

type FormProps = {
  children?: React.ReactNode; // optional
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"form">;

function Form(props: FormProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <label htmlFor="">Name:</label>
        <input onChange={props.handleChange} type={"text"} placeholder="Name" />
      </fieldset>
      <fieldset>
        <label htmlFor="">Email:</label>
        <input
          name="email"
          onChange={handleInputChange}
          type={"text"}
          placeholder="Email"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Password:</label>
        <input type={"text"} placeholder="Password" />
      </fieldset>
      <Button handleClick={() => console.log("From The Form")} />
      {props.children}
    </form>
  );
}

export default Form;
