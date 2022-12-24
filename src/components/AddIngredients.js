import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

const AddIngredients = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchIngredients, setSearchIngredients] = useState([]);
  const ingredients = ["apple", "banana", "sugar"];

  useEffect(() => {
    console.log("page mounted");
  }, []);
  useEffect(() => {
    console.log(searchIngredients, "ingredients");
  }, [searchIngredients]);

  return (
    <div className="addIngredientWrapper">
      <div className="searchBar">
        <input
          type="text"
          className="inputSearchBar"
          style={{ borderStyle: "none", backgroundColor: "#e9e8e8" }}
          placeholder="Add Ingredients"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />

        <GoPlus
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            searchIngredients.includes(searchInput)
              ? window.alert("Ingredient already added")
              : setSearchIngredients([...searchIngredients, searchInput]);
            setSearchInput("");
          }}
        />
      </div>
      <div className="ingredientsList">
        {searchIngredients.map((ingredient, idx) => {
          return (
            <div className="ingredientList" key={idx}>
              <div style={{ maxWidth: "150px" }}>{ingredient}</div>
              <div
                className="close"
                onClick={(e) => {
                  setSearchIngredients(
                    searchIngredients.filter((item) => item !== ingredient)
                  );
                }}
              >
                <BiX></BiX>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddIngredients;
