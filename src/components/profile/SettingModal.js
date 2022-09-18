import { useEffect, useState } from 'react';

function SettingModal() {
    let [settingModal, setModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='setting-modal'>
            <ul role="dialog">
                <li>
                    <a href='#none'>비밀번호 변경</a>
                </li>
                <li>
                    <a href='#none'>QR 코드</a>
                </li>
                <li>
                    <a href='#none'>앱 및 웹사이트</a>
                </li>
                <li>
                    <a href='#none'>알림</a>
                </li>
                <li>
                    <a href='#none'>개인정보 및 보안</a>
                </li>
                <li>
                    <a href='#none'>관리 감독</a>
                </li>
                <li>
                    <a href='#none'>로그인 활동</a>
                </li>
                <li>
                    <a href='#none'>Instagram에서 보낸 이메일</a>
                </li>
                <li>
                    <a href='#none'>문제 신고</a>
                </li>
                <li>
                    <a href='#none'>퍼가기</a>
                </li>
                <li>
                    <a href='#none'>로그아웃</a>
                </li>
                <li>
                    <a
                        href=''
                        onClick={() => {
                            setModal(settingModal);
                        }}
                    >
                        취소
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SettingModal;
