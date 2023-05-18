import './App.css';
import Header from './components/Header';
import Pizza from './components/Pizza';
import ViewCounter from './components/ViewCounter';

function App() {
  return (
    <div className="App">
      {/* <Header title="Hello and welcome!" />
      <ViewCounter /> */}
      <Pizza />
    </div>
  );
}

export default App;