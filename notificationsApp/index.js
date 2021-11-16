function Notification(props) {
  // Write your code here.
  const { clsName, logo, content, iconCls } = props;
  const element = (
    <p className={clsName}>
      <img src={logo} className={iconCls} />
      {content}
    </p>
  );
  return element;
  //    const {className, iconUrl, message} = props
  //   const containerClassName = `notification-container ${className}`
  //   return (
  //     <div className={containerClassName}>
  //       <img className="icon" src={iconUrl} />
  //       <p className="message">{message}</p>
  //     </div>
}

const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        clsName="blueNfn"
        logo="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        content="Information Message"
        iconCls="icon"
      />
      <Notification
        clsName="successNfn"
        logo="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        content="Success Message"
        iconCls="icon"
      />
      <Notification
        clsName="warningNfn"
        logo="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        content="Warning Message"
        iconCls="icon"
      />
      <Notification
        clsName="dngNfn"
        logo="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        content="Danger Message"
        iconCls="icon"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
