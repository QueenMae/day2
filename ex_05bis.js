function getBasketContent(nbFruits) {
    const fruits = [
         "strawberry", "strawberry", "strawberry","apple","apple","lime","lime","peach","pear","pear"
   
   ];


    if (nbFruits > fruits.length) {
        console.log('Too many fruit(s) selected.');
     }
     else {console.log(fruits.length + " fruit(s) selected");}

 return fruits; }

if (typeof getBasketContent === "function") {
  const fruits = getBasketContent(nbFruits)
 showMyBasket(fruits);
 }
