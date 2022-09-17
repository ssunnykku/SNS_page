import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Profile from './component/Profile';
import Boards from './component/Boards';

function App() {
    return (
        <div className='App'>
            <Header />
            <div>
                <main>
                    <Profile />
                    <Boards />
                </main>
            </div>
        </div>
    );
}
export default App;
