function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <a href='#none'>
                    <img src={process.env.PUBLIC_URL + '/insta-logo.png'} alt='logo' />
                </a>
                <button className='btn_select'>
                    <img src={process.env.PUBLIC_URL + '/arrow_select.svg'} alt='btn_select' />
                </button>
            </div>
            <div className='search-box'>
                <input type='text' placeholder='검색' />
            </div>
            <ul className='gnb'>
                <li>
                    <a href='#none'>
                        <img src={process.env.PUBLIC_URL + '/home.svg'} alt='home' />
                    </a>
                </li>
                <li>
                    <a href='#none'>
                        <img src={process.env.PUBLIC_URL + '/message.svg'} alt='msg' />
                    </a>
                </li>
                <li>
                    <a href='#none'>
                        <img src={process.env.PUBLIC_URL + '/add.svg'} alt='plus' />
                    </a>
                </li>
                <li>
                    <a href='#none'>
                        <img src={process.env.PUBLIC_URL + '/history.svg'} alt='recommad' />
                    </a>
                </li>
                <li>
                    <a href='#none'>
                        <img src={process.env.PUBLIC_URL + '/favorite.svg'} alt='heart' />
                    </a>
                </li>
                <li>
                    <a href='#none'>
                        <img src={process.env.PUBLIC_URL + '/face.svg'} alt='profile' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
