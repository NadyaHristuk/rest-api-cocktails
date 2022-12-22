1. http://localhost:3000/api/json/v1/1/drinks/get/?r=n  -- рандомный коктейль n -- количество коктейлей ++ // id,strDrink,thumb

2. http://localhost:3000/api/json/v1/1/drinks/search/?f=a    -- получить все напитки на букву  ++ // id,strDrink,thumb
3. http://localhost:3000/api/json/v1/1/drinks/search/?s=margarita -- получить напиток по названию ++ // id,strDrink,thumb
4. http://localhost:3000/api/json/v1/1/drinks/search/?a=alcoholic   -- алкогольные напитки ++ // id,strDrink,thumb
5. http://localhost:3000/api/json/v1/1/drinks/search/?a=non alcoholic   -- безалкогольные напитки ++ // id,strDrink,thumb
6. http://localhost:3000/api/json/v1/1/drinks/search/?c=Cocktail -- все напитки в категории "Cocktail" ++ // id,strDrink,thumb
7. http://localhost:3000/api/json/v1/1/drinks/search/?i=Vodka,Iced tea -- все напитки с этими игридиентами ++ // id,strDrink,thumb
8. http://localhost:3000/api/json/v1/1/drinks/search/?g=Cocktail glass -- все напитки по таре //id,strDrink,thumb

---  List the categories, glasses, ingredients or alcoholic filters ---
8. http://localhost:3000/api/json/v1/1/drinks/filter/?c=list ++ //  id,strDrink,thumb
9. http://localhost:3000/api/json/v1/1/drinks/filter/?g=list ++ // id,strDrink,thumb
10. http://localhost:3000/api/json/v1/1/drinks/filter/?i=list ++ 
11. http://localhost:3000/api/json/v1/1/drinks/filter/?a=list ++
12. 
--- Lookup full cocktail details by id
12. http://localhost:3000/api/json/v1/1/drinks/lookup?id=11007
13. http://localhost:3000/api/json/v1/1/drinks/lookup?ids=11007,20054....

14. http://localhost:3000/api/json/v1/1/drinks/count   -- кол-во коктейлей

!!! все ингридиенты только через " " - только к ингридиентам -- картинкам
https://storage.googleapis.com/cocktails-v1/ingredients/Apple brandy/Apple brandy.png
https://storage.googleapis.com/cocktails-v1/ingredients/Apple brandy/Apple brandy-Medium.png
https://storage.googleapis.com/cocktails-v1/ingredients/Apple brandy/Apple brandy-Small.png



Total Drinks: 635 Total Ingredients: 489