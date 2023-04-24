import './App.css';
import MyHeader from './components/header';
import MyHero from './components/hero';
import MyProjects from './components/projects';

function App() {
  return (
    <div className="App bg-gray-900">
      <MyHero />
      <MyProjects />
    </div>
  );
}

export default App;
