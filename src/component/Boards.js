import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';
import React,{ useState } from 'react';

function Boards() {

    const [tab, setTab] = useState(0);

    return (
      <>
      <Nav variant="tabs" defaultActiveKey="link0">
              <Nav.Item>
                <Nav.Link eventKey="link1" onClick={()=>{setTab(0)}}>게시물</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link2" onClick={()=>{setTab(1)}}>동영상</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link3" onClick={()=>{setTab(2)}}>저장됨</Nav.Link>
              </Nav.Item>
          </Nav>
          <TabContent tab={tab} />
          </>
    );
  };

  function TabContent({tab}) {
    if (tab === 0) {
        return <ul className="container">
        <li className="item">
            <a href='#none'>
                <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
            </a>
        </li>
        <li className="photo">
            <a href='#none'>
                <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
        </a>
        </li>
        <li className="photo">
            <a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
        </a>
        </li>
        <li className="photo"><a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
        </a>
        </li>
        <li className="photo"><a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
        </a>
        </li>
        <li className="photo"><a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
            </a>
        </li>
        <li className="photo"><a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
            </a>
        </li>
        <li className="photo"><a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
            </a>
        </li>
        <li className="photo"><a href='#none'>
            <img className="photo" src={process.env.PUBLIC_URL + '/boardexm.jpg'} alt='boardImg' />
            </a>
        </li>
    </ul>
        
    } else if (tab === 1) {
        return <div>내용1</div>
    } else if (tab === 2) {
        return <div>내용1</div>
    }
  }

  export default Boards;