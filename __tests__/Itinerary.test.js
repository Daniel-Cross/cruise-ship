const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Itinerary', () => {
	it('should be instantiated', () => {
		const itinerary = new Itinerary();
		expect(itinerary).toBeInstanceOf(Object);
	});

	it('can hold ports', () => {
		const dover = new Port('Dover');
		const calais = new Port('Calais');
		const itinerary = new Itinerary([ dover, calais ]);

		expect(itinerary.ports).toEqual([ dover, calais ]);
	});
});
