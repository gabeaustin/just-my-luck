import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Luck from "./Luck";
import Instructions from "./Instructions";
// import Modal from "./Modal";

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
