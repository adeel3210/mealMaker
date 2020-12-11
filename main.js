const menu = {
  _courses : {
    appetizers: [] ,
    mains: [] ,
    desserts: [],
  },

 get appetizers() {
   return this._courses.appetizers;
},
 get mains(){
   return this._courses.mains;
},
 get desserts(){
   return this._courses.desserts;
},
 set appetizers(appetizers){
   this._courses.appetizers = appetizers;
},
 set mains(mains){
   this._courses.mains = mains;
 },
 set desserts(desserts){
   this._courses.desserts = desserts;
},
get courses(){
  return{
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  };
 },
addDishToCourse(courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice,
 };
   return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse("appetizers");
  const main = this.getRandomDishFromCourse("mains");
  const dessert = this.getRandomDishFromCourse("desserts");
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is a ${appetizer.name} with ${main.name} and the ${dessert.name} for dessert. The Bill will add up to ${totalPrice}`
},
};

menu.addDishToCourse("appetizers","mozerella sticks", 4)
menu.addDishToCourse("appetizers","holoummi cheese", 1.99)
menu.addDishToCourse("appetizers","chicken salad", 3.99)

menu.addDishToCourse("mains","Buffalo Chicken Burger", 7)
menu.addDishToCourse("mains","lamb steak", 10)
menu.addDishToCourse("mains","buttermilk Chicken burger", 6.99)

menu.addDishToCourse("desserts","oreo cheescake", 4.99)
menu.addDishToCourse("desserts","new york cheesecake", 4.99)
menu.addDishToCourse("desserts","chocolate sundae", 5.99)


let meal = menu.generateRandomMeal();
console.log(meal);
