import logo from "./logo.svg";
import "./App.css";
import Combinations from "./components/Combinations";
import Header from "./components/Header";
import AddIngredients from "./components/AddIngredients";

function App() {
  const recipeNamesList = [];
  return (
    <div className="App">
      <Header />
      <AddIngredients />
      <Combinations recipeNameList={recipeNamesList} />
    </div>
  );
}

export default App;
