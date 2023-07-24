const Cocktails = require("../../models/cockatils/index");

const { createError } = require("../../helpers/createError");

async function getRandom(req, res, next) {
  try {
    const count = req.query.r ? Number(req.query.r) : 1;
    const result = [
      { $sample: { size: count } },
      {
        $project: {
          _id: "$_id",
          drink: "$drink",
          drinkThumb: "$drinkThumb",
        },
      },
    ];

    const cocktails = await Cocktails.aggregate(result);
    if (!cocktails.length) {
      return next(createError(404, "Not found"));
    }

    res.json(cocktails);
  } catch (error) {
    next(error);
  }
}

module.exports = getRandom;
