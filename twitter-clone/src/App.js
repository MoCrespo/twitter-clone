import './main.css';
import Sidebar  from './components/Sidebar'
import Content from './components/Content'
import Widgets from './components/Widgets'

function App() {
  return (
    <div className="app container">

      <Sidebar />

      <Content  />

      <Widgets />
    </div>
  );
}

export default App;
