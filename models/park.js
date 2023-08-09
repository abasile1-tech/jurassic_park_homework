/*
A park must have:

A name
A ticket price
A collection of dinosaurs

A park must be able to:

Add a dinosaur to its collection of dinosaurs
Remove a dinosaur from its collection of dinosaurs
Find the dinosaur that attracts the most visitors
Find all dinosaurs of a particular species
Calculate the total number of visitors per day
Calculate the total number of visitors per year
Calculate the total revenue from ticket sales for one year
*/

const Park = function (name, ticketPrice, collectionOfDinosaurs) {
	this.name = name;
	this.ticketPrice = ticketPrice;
	this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaurToCollection = function (dinosaur) {
	this.collectionOfDinosaurs.push(dinosaur);
}

module.exports = Park;