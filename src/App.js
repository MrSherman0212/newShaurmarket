import './App.css';
import Sidebar from './Container/Sidebar/Sidebar';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Container/sherMedia.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes />
      <Sidebar />
    </div>
  );
}

export default App;
