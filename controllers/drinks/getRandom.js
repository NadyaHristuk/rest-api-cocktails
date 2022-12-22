const Cocktails = require("../../models/cockatils/index");

const {createError} = require("../../helpers/createError");

async function getRandom(req, res) {
    const query = () => {
        let result = {};
        let count = 1;
        for (const [key, value] of Object.entries(req.query)) {
            if (value) count=Number(value);
            switch (key) {
                case "r":
                    result = [{ $sample: { size: count } },{
                        $project: {
                            _id:"$_id",
                            strDrink:"$strDrink",
                            strDrinkThumb:"$strDrinkThumb"
                        }}];
                    break;
                default:
                    result = false;
            }
        }
        return result;
    }

    const que = query();
    if (!que) {
        throw createError({status: 404, message: "api! query not found"});
    } else {
        const result = await Cocktails.aggregate(que);
        if (!result) {
            throw createError({status: 404, message: "Not found"});
        }
        res.json(result);
    }
}

module.exports = getRandom;
