import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/profile/Profile';
import Boards from './components/boards/Boards';

function App() {
    return (
        <div className='App'>
            <Header />
            <div className="personalPage">
                <main>
                    <Profile />
                    <Boards />
                </main>
            </div>
        </div>
    );
}
export default App;
