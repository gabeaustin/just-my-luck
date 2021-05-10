import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Luck from "./Luck";
// import Modal from "./Modal";
import Instructions from "./Instructions";

function App() {
  return (
    <div className="App container">
      <Instructions />
      <Luck />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
