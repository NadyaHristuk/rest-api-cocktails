const Cocktails = require("../../models/cockatils/index");

const {createError} = require("../../helpers/createError");

async function getCount(req, res) {
    const query = () => {
        let result = {};
        for (const [key, value] of Object.entries(req.query)) {
            switch (key) {
                case "count":
                    result = {}
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
        const result = await Cocktails.count(que);
        if (!result) {
            throw createError({status: 404, message: "Not found"});
        }
        res.json(result);
    }
}

module.exports = getCount;
