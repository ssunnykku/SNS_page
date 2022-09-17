import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Boards from './component/Boards';

function App() {
    return (
        <div className='App'>
            <Header />      
            <Boards/>
        </div>
    );
}


export default App;
