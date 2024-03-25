import './App.css';
import { Col } from "antd";
import { Searcher } from './Components/Searcher';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8} >
        <Searcher />
      </Col>
    </div>
  );
}

export default App;
