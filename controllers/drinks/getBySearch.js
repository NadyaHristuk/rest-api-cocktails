const Cocktails = require("../../models/cockatils/index");

const {createError} = require("../../helpers/createError");

async function getBySearch(req, res) {
    const fields = {_id: 1,strDrink:1,strDrinkThumb:1};
    const query = () => {
        let result = {};
        let arr=[];
        for (const [key, value] of Object.entries(req.query)) {
            switch (key) {
                case "f":
                case "s":
                    result = {strDrink: {$regex: "^" + value, $options: "i"}};
                    break;
                case "a":
                    result = {strAlcoholic: {$regex: '^' + value, $options: 'i'}};
                    break;
                case "c":
                    result = {strCategory: {$regex: '^' + value, $options: 'i'}};
                    break;
                case "i":
                     arr = value.split(',');
                    result = {strIngredient: {$all: arr}};
                    break;
                case "g":
                    result = {"strGlass": {$regex: '^' + value, $options: 'i'}};
                    break;
                default:
                    result = false;
            }
            console.log(result);
        }
        return result;

    }
    const que = query();
    if (!que) {
        throw createError({status: 404, message: "api! query not found"});
    } else {
        const result = await Cocktails.find(que).select(fields);
        if (!result) {
            throw createError({status: 404, message: "Not found"});
        }
        res.json(result);
    }

}

module.exports = getBySearch;
