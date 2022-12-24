const RecipeContainer = (props) => {
  function makeFirstLetterCapital(phrase) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1) + ".";
  }
  return (
    <div className="recipeContainer">
      <p>Steps For Recipe</p>
      <div>
        {props.recipeData.map((step, idx) => {
          return (
            <div key={idx}>
              {idx + 1}. {makeFirstLetterCapital(step)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeContainer;
