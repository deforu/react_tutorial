import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ height: "700px" }}>
      <div style={{height: "10%",backgroundColor: "#0d1722"}}>
        Menu
      </div>
      <div style={{height: "50%",backgroundColor: "#1c3045"}}>
        ue
      </div>
      <div style={{ height: "50%" }}>
        <div className="leftsita" style={{ height: "100%", width: "15%", display: "inline-block" }}>
        </div>
        
        <div className="sita" style={{ height: "100%", width: "70%", display: "inline-block" }}>
          <div style={{}}>

          </div>
        </div>

        <div style={{ height: "100%", width: "15%", backgroundColor: "#254465", display: "inline-block" }}></div>
      </div>
    </div>
  );
}

export default App;