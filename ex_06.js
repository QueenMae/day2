fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
let fruitName = "Banana"
function findFruitIndex (fruitName) {
		const index = fruits.indexOf(fruitName);
		if (index === -1) {
		return null;
		} else {
		return index;
		}	
}
function disdis(result) {
displayResult(result);
}
disdis(findFruitIndex(fruitName));
