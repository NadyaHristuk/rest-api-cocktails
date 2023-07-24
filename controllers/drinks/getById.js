const Cocktails = require("../../models/cockatils/index");

const { createError } = require("../../helpers/createError");

async function getById(req, res) {
  let arr = [];
  const query = () => {
    let result = {};
    for (const [key, value] of Object.entries(req.query)) {
      switch (key) {
        case "id":
          result = { _id: value };
          break;
        case "ids":
          arr = value.split(",");
          result = { _id: { $in: arr } };
          break;
        default:
          result = false;
      }
    }
    return result;
  };

  const que = query();
  if (!que) {
    throw createError({ status: 404, message: "api! query not found" });
  } else {
    const result = await Cocktails.find(que);
    if (!result) {
      throw createError({ status: 404, message: "Not found" });
    }
    res.json(result);
  }
}

module.exports = getById;
