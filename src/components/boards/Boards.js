import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import TabContent from './TabContent';

const photos = [
    {
        id: 0,
        photo: '/boardexm.jpg'
    },
    {
        id: 1,
        photo: '/boardexm.jpg'
    },
    {
        id: 2,
        photo: '/boardexm.jpg'
    },
    {
        id: 3,
        photo: '/boardexm.jpg'
    },
    {
        id: 4,
        photo: '/boardexm.jpg'
    },
    {
        id: 5,
        photo: '/boardexm.jpg'
    },
    {
        id: 6,
        photo: '/boardexm.jpg'
    },
    {
        id: 7,
        photo: '/boardexm.jpg'
    },
    {
        id: 8,
        photo: '/boardexm.jpg'
    },
    {
        id: 9,
        photo: '/boardexm.jpg'
    }
]


function Boards() {
    const [tab, setTab] = useState(0);
   
    return (
        <>
            <Nav variant='tabs' defaultActiveKey='link0' className='tab'>
                <Nav.Item>
                    <Nav.Link
                        eventKey='link1'
                        onClick={() => {
                            setTab(0);
                        }}
                    >
                        게시물
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey='link2'
                        onClick={() => {
                            setTab(1);
                        }}
                    >
                        동영상
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey='link3'
                        onClick={() => {
                            setTab(2);
                        }}
                    >
                        저장됨
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} 
                        photos={photos}
                                />
        </>
    );
}

export default Boards;