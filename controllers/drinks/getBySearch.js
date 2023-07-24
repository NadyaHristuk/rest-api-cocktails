const Cocktails = require("../../models/cockatils/index");

const { createError } = require("../../helpers/createError");

async function getBySearch(req, res) {
  const fields = { _id: 1, drink: 1, drinkThumb: 1 };

  const query = () => {
    for (const [key, value] of Object.entries(req.query)) {
      switch (key) {
        case "f":
          return { drink: { $regex: "^" + value, $options: "i" } };
        case "s":
          return { drink: { $regex: value, $options: "i" } };
        case "a":
          return { alcoholic: { $regex: "^" + value, $options: "i" } };
        case "c":
          return { category: { $regex: "^" + value, $options: "i" } };
        case "i":
          const arr = value.split(",");
          return { strIngredient: { $all: arr } };
        case "g":
          return { glass: { $regex: "^" + value, $options: "i" } };
        default:
          return false;
      }
    }
    return false;
  };

  const que = query();
  if (!que) {
    throw createError(404, "api! query not found");
  } else {
    const result = await Cocktails.find(que).select(fields);
    if (!result || result.length === 0) {
      throw createError(404, "Not found");
    }
    res.json(result);
  }
}

module.exports = getBySearch;
