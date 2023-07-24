const Cocktails = require("../../models/cockatils/index");

const { createError } = require("../../helpers/createError");
const Ingredient = require("../../models/ingredients");

async function getFilter(req, res) {
  const getDistinctValues = async (fieldName) => {
    const distinctValues = await Cocktails.distinct(fieldName);
    return distinctValues;
  };

  const result = {};

  const filters = {
    c: "category",
    g: "glass",
    i: "ingredients",
    a: "alcoholic",
  };

  for (const [key, value] of Object.entries(req.query)) {
    if (value === "list" && filters[key]) {
      if (key == "i") {
        result[filters[key]] = await Ingredient.find({}, { title: 1, _id: 0 });
      } else {
        result[filters[key]] = await getDistinctValues(filters[key]);
      }
    }
  }

  if (!result || result.length === 0) {
    throw createError(404, "Not found");
  }
  res.json(result);
}

module.exports = getFilter;
