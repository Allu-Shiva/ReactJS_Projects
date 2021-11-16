function Button(props) {
  //   Write your code here.
  const { btnCls, name } = props;
  return <button className={btnCls}>{name}</button>;
}

const element = (
  //   Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Social Buttons</h1>
    <div className="btnContainer">
      <Button btnCls="btnlike" name="like" />
      <Button btnCls="btncmt" name="comment" />
      <Button btnCls="btnshare" name="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
