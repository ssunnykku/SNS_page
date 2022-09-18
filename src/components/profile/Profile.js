import { useState } from 'react';
import SettingModal from './SettingModal';

function Profile() {
    let [settingModal, setModal] = useState(false);

    return (
        <section className='profile'>
            <div className='profile-img'>
                <div></div>
            </div>
            <div className='profile-des'>
                <div>
                    <h4 className='profile-title'>heesoo</h4>
                    <button className='profile-edit'>프로필 편집</button>
                    <button
                        className='btn-setting'
                        onClick={() => {
                            setModal(!settingModal);
                        }}
                    >
                        <img src={process.env.PUBLIC_URL + '/settings.svg'} alt='btn-setting' />
                    </button>
                </div>
                <ul>
                    <li>
                        게시물 <span>25</span>
                    </li>
                    <li>
                        <a href='#none'>
                            팔로워 <span>51</span>
                        </a>
                    </li>
                    <li>
                        <a href='#none'>
                            팔로우 <span>34</span>
                        </a>
                    </li>
                </ul>
                <div>
                    <span>프론트엔드 개발기록</span>
                    <p>
                        #React #html #css #javascript <br />
                        #UX/UI
                    </p>
                </div>
                {settingModal == true ? <SettingModal /> : null}
            </div>
        </section>
    );
}

export default Profile;
