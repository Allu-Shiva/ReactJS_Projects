const element = (
  // Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
        <p className="text">Kiran V</p>
      </div>
      <p class="text">
        Vishnu Institute of Computer Education and Technology, Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
