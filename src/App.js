import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Boards/>
    </div>
  );
}

function Boards() {
  return (
    <>
    <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link eventKey="link1" >게시물</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link2">동영상</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link3">저장됨</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
  );
}

export default App;
