const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
	let dinosaur1;
	let dinosaur2;
	let dinosaur3;
	let park1;

	this.beforeEach(function () {
		dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
		dinosaur2 = new Dinosaur('triceratops', "herbivore", 20);
		dinosaur3 = new Dinosaur('t-rex', 'carnivore', 10);
		park1 = new Park('Isla Nublar', 300, [dinosaur1]);
	});

	it('should have a name', function () {
		const actual = park1.name;
		assert.strictEqual(actual, 'Isla Nublar');
	});

	it('should have a ticket price', function () {
		const actual = park1.ticketPrice;
		assert.strictEqual(actual, 300);
	});

	it('should have a collection of dinosaurs', function () {
		const actual = park1.collectionOfDinosaurs;
		assert.deepStrictEqual(actual, [dinosaur1]);
	});

	it('should be able to add a dinosaur to its collection', function () {
		park1.addDinosaurToCollection(dinosaur2);
		const actual = park1.collectionOfDinosaurs;
		assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
	});

	it('should be able to remove a dinosaur from its collection', function () {
		park1.addDinosaurToCollection(dinosaur2);
		park1.removeDinosaurFromCollection(dinosaur1);
		const actual = park1.collectionOfDinosaurs;
		assert.deepStrictEqual(actual, [dinosaur2]);
	});

	it('should be able to find the dinosaur that attracts the most visitors', function () {
		park1.addDinosaurToCollection(dinosaur2)
		const actual = park1.findMostPopularDinosaur();
		assert.deepStrictEqual(actual, dinosaur1);
	});

	it('should be able to find all dinosaurs of a particular species', function () {
		park1.addDinosaurToCollection(dinosaur2);
		park1.addDinosaurToCollection(dinosaur3);
		const actual = park1.findAllDinosaursOfSpecies('t-rex');
		assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
	});

	it('should be able to calculate the total number of visitors per day');

	it('should be able to calculate the total number of visitors per year');

	it('should be able to calculate total revenue for one year');
});