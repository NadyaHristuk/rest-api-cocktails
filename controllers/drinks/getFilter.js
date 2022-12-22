const Cocktails = require("../../models/cockatils/index");

const {createError} = require("../../helpers/createError");

async function getFilter(req, res) {

    const query = () => {
        let result = false;
        for (const [key, value] of Object.entries(req.query)) {
            if (value === "list"){
            switch (key) {
                case "c":
                    result = "strCategory";
                    break;
                case "g":
                    result = "strGlass";
                    break;
                case "i":
                    result = "strIngredient";
                    break;
                case "a":
                    result = "strAlcoholic";
                    break;
            }}
        }
        return result;
    }
    const que = query();
    if (!que) {
        throw createError({status: 404, message: "api! query not found"});
    } else {
        const result = await Cocktails.distinct(que);
        if (!result) {
            throw createError({status: 404, message: "Not found"});
        }
        res.json(result);
    }

}

module.exports = getFilter;
