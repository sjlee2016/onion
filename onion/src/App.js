import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage.js';
import LoginPage from './pages/LoginPage.js';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage.js';
function App() {
  return (<>
    <NavBar/>
    <RegisterPage/>
    </>
  );
}

export default App;
