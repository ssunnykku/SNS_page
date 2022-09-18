import React, { useState } from 'react'

function TabContent({ tab, photos }) {
    const [board, setBoard] = useState(false);

    if (tab === 0) {
        return (
            <ul className='tab-container'>
               { photos.map((a, i) => {
                    return (
                    <li className='photo' key={photos[i].id}>
                    <a href='#none'>
                       <img className='photo' src={photos[i].pic} alt='boardImg' type="button" onClick={()=>{setBoard(!board)}} />
                    </a>
                </li>)
                })}
            </ul>
        );
    } else if (tab === 1) {
        return <div>내용1</div>;
    } else if (tab === 2) {
        return <div>내용1</div>;
    }
}

export default TabContent;