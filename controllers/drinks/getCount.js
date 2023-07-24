const Cocktails = require("../../models/cockatils/index");

const { createError } = require("../../helpers/createError");

async function getCount(req, res) {
  const result = await Cocktails.count();
  if (!result) {
    throw createError({ status: 404, message: "Not found" });
  }
  res.json({ number_of_cocktails: result });
}

module.exports = getCount;
