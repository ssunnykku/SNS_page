import React, { useState } from 'react';
import Board from './Board';

function TabContent({ tab, photos }) {
    const [board, setBoard] = useState(false);

    if (tab === 0) {
        return (<>
            <ul className='tab-container'>
               { photos.map((a, i) => {
                    return (
                    <li className='photoList' key={photos[i].id}>
                    <a href='#none'>
                       <img className='photoList' src={photos[i].photo} alt='boardImg' type="button" onClick={()=>{setBoard(!board)}} />
                    </a>
                </li>)
                })}
            </ul>
              { board ? 
                <div><Board /></div> : null }
              </>
        );
    } else if (tab === 1) {
        return <div>내용1</div>;
    } else if (tab === 2) {
        return <div>내용1</div>;
    }
}

export default TabContent;