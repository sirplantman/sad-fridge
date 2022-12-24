import logo from './logo.svg';
import './App.css';
import Combinations from './components/Combinations';
import Header from './components/Header';

function App() {
  const recipeNamesList = ["Recipe Name 1", "Recipe Name 2", "Recipe Name 3", "Recipe Name 4", "Recipe Name 5", "Recipe Name 6"
                          , "Recipe Name 7", "Recipe Name 8", "Recipe Name 9", "Recipe Name 10", "Recipe Name 11"]
  return (
    <div className="App">
      <Header />
      <Combinations recipeNameList={recipeNamesList}/>
    </div>
  );
}

export default App;
