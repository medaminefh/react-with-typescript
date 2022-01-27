type NamesListProps = {
  names:{
    name?:string
    age:number
  }[]
}


const Lists = (props:NamesListProps) => {
  return <div>{props.names.map(name => (
    <div key={name.age}>
    <h3>{name.name}</h3>
    <h3>{name.age}</h3>
      </div>
  ))}</div>;
}

export default Lists;
