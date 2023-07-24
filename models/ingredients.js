const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  title: String,
  ingredientThumb: String,
  "thumb-medium": String,
  "thumb-small": String,
});

const Ingredient = model("ingredient", ingredientSchema);

module.exports = Ingredient;
