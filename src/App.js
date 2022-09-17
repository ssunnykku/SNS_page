import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Profile from './component/Profile';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <main>
                                <Profile />
                            </main>
                        </>
                    }
                ></Route>
            </Routes>
        </div>
    );
}
function SettingModal() {
    return (
        <div>
            <div className='setting-modal'>.</div>
        </div>
    );
}
export default App;
