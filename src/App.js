import logo from "./logo.svg";
import "./App.css";
import Combinations from "./components/Combinations";
import Header from "./components/Header";
import AddIngredients from "./components/AddIngredients";
import SadFridgeImg from "./components/SadFridgeImg";

function App() {
  const recipeNamesList = [];
  return (
    <div className="App">
      <Header />
      <AddIngredients />
      <Combinations recipeNameList={recipeNamesList} />
      <SadFridgeImg />
    </div>
  );
}

export default App;
