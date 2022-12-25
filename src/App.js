import logo from "./logo.svg";
import "./App.css";
import Combinations from "./components/Combinations";
import Header from "./components/Header";
import AddIngredients from "./components/AddIngredients";
import SadFridgeImg from "./components/SadFridgeImg";
import RecipeContainer from "./components/RecipeContainer";
import Footer from "./components/Footer";

function App() {
  const recipeData = [
    "make a choice and proceed with recipe",
    "depending on size of squash , cut into half or fourths",
    "remove seeds",
    "for spicy squash , drizzle olive oil or melted butter over each cut squash piece",
    "season with mexican seasoning mix ii",
    "for sweet squash , drizzle melted honey , butter , grated piloncillo over each cut squash piece",
    "season with sweet mexican spice mix",
    "bake at 350 degrees , again depending on size , for 40 minutes up to an hour , until a fork can easily pierce the skin",
    "be careful not to burn the squash especially if you opt to use sugar or butter",
    "if you feel more comfortable , cover the squash with aluminum foil the first half hour , give or take , of baking",
    "if desired , season with salt",
  ];
  const recipeNamesList = [];
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <div>
          <AddIngredients />
        </div>
        <div>
          <Combinations recipeNameList={recipeNamesList} />
        </div>
        <div>
          <RecipeContainer recipeData={recipeData} />
        </div>
        <div>
          <SadFridgeImg />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
