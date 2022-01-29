type StylesProp = {
    styles:React.CSSProperties
}


function Styles(props:StylesProp) {
  return <div style={props.styles}>Hello world</div>;
}

export default Styles;
