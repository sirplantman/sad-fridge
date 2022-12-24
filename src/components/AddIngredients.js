import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";

const AddIngredients = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchIngredients, setSearchIngredients] = useState([]);
  const ingredients = ["apple", "banana", "sugar"];

  useEffect(() => {
    fetch('/add', {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(searchIngredients),
    }).then(res => res.json()).then(message => console.log(message))
  }, [searchIngredients]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Ingredients"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            searchIngredients.includes(searchInput)
              ? window.alert("Ingredient already added")
              : setSearchIngredients([...searchIngredients, searchInput]);
            setSearchInput("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {searchIngredients.map((ingredient, idx) => {
          return (
            <div className="ingredientList" key={idx}>
              <div>{ingredient}</div>
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
