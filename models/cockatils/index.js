const {Schema, model} = require("mongoose");

const drinkSchema = new Schema(
    {
        strDrink: String,
        strDrinkAlternate: String,
        strTags: String,
        strVideo: String,
        strCategory: String,
        strIBA: String,
        strAlcoholic: String,
        strGlass: String,
        strInstructions: String,
        strInstructionsES: String,
        strInstructionsDE: String,
        strInstructionsFR: String,
        strInstructionsIT: String,
        strInstructionsRU: String,
        strInstructionsPL: String,
        strInstructionsUK: String,
        strDrinkThumb: String,
        strIngredient: [String,],
        strMeasure: [String,],
        strImageSource: String,
        strImageAttribution: String,
        strCreativeCommonsConfirmed: String,
        dateModified: String,
    }
);

const Drinks = model("drinks", drinkSchema);

module.exports = Drinks;

