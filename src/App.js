import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Registeration from './components/Registration/Registration';
import { useSelector } from 'react-redux';
function App() {
  const auth = useSelector((state) => state.login.auth);

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registeration />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
