import Lists from "../lists/Lists";

const Extracting_Props = (props: React.ComponentProps<typeof Lists>) => {
  console.log(props.names);
  return (
    <div>
      Hello world, This could be helpful to copy the same props as the Lists...{" "}
    </div>
  );
};

export default Extracting_Props;
