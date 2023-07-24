const {Schema, model} = require("mongoose");

const cocktailsSchema = new Schema(
    {
        drink: String,
        drinkAlternate: String,
        tags: String,
        video: String,
        category: String,
        IBA: String,
        alcoholic: String,
        glass: String,
        instructions: String,
        instructionsES: String,
        instructionsDE: String,
        instructionsFR: String,
        instructionsIT: String,
        instructionsRU: String,
        instructionsPL: String,
        sinstructionsUK: String,
        drinkThumb: String,
        ingredients: [Object]        
    }
);

const Сocktail = model("recipes", cocktailsSchema);

module.exports = Сocktail;

