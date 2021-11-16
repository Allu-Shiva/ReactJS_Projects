function Box(props) {
  // Write your code here.
  const {clsName,text} = props
  return <div className={clsName}>
    {text}
  </div>
}

const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1>Boxes</h1>
    <div className="box-container">
        <Box clsName="box small-box" text="Small"/>
        <Box clsName="box medium-box" text="Medium"/>
        <Box clsName="box large-box" text="Large"/>        
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
