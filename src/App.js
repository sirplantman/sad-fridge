import logo from './logo.svg';
import './App.css';
import Combinations from './components/Combinations';
import Header from './components/Header';

function App() {
  const recipeNamesList = []
  return (
    <div className="App">
      <Header />
      <Combinations recipeNameList={recipeNamesList}/>
    </div>
  );
}

export default App;
