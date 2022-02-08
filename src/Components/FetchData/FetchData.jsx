import "./FetchData.css";

function FetchData() {
  return (
    <div className="fetchData">
      <div className="fetchData__content">
        <div className="fetchData__row">
          <input type="radio"></input>
          <span>Test-data-1</span>
        </div>
        <div className="fetchData__row">
          <input type="radio"></input>
          <span>Test-data-2</span>
        </div>
        <div className="fetchData__row">
          <input type="radio"></input>
          <span>Custom</span>
        </div>
        <button className="getData">Get Data</button>
      </div>
    </div>
  );
}

export default FetchData;
