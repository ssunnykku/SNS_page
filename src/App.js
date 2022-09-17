import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Profile from './component/Profile';
import Boards from './component/Boards';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function App() {
    return (
        <div className='App'>
            <Header />
            <div>
                <main>
                    <Profile />
                </main>
            </div>
            <Boards />
        </div>
    );
}
function SettingModal() {
    return (
        <div className='setting-modal'>
            <ul>
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
                    <a href='#none'>취소</a>
                </li>
            </ul>
        </div>
    );
}
export default App;
