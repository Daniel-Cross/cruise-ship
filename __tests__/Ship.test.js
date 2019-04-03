const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('with ports and an itinerary', () => {
	it('can be instantiated', () => {
		const port = new Port('Dover');
		const itinerary = new Itinerary([ port ]);
		const ship = new Ship(itinerary);

		expect(ship).toBeInstanceOf(Object);
	});

	it('has a starting port', () => {
		const dover = new Port('Dover');
		const itinerary = new Itinerary([ dover ]);
		const ship = new Ship(itinerary);

		expect(ship.currentPort).toBe(dover);
	});

	it('can set sail', () => {
		const dover = new Port('Dover');
		const calais = new Port('Calais');
		const itinerary = new Itinerary([ dover, calais ]);
		const ship = new Ship(itinerary);

		ship.setSail();

		expect(ship.currentPort).toBeFalsy();
	});

	it('gets added to port on instantiation', () => {
		const dover = new Port('Dover');
		const itinerary = new Itinerary([ dover ]);
		const ship = new Ship(itinerary);

		expect(dover.ships).toContain(ship);
	});
});

describe('with ports and an itinerary', () => {
	let ship;
	let dover;
	let calais;
	let itinerary;

	beforeEach(() => {
		dover = new Port('Dover');
		calais = new Port('Calais');
		itinerary = new Itinerary([ dover, calais ]);
		ship = new Ship(itinerary);
	});

	it("can't sail further than its itinerary", () => {
		ship.setSail();
		ship.dock();

		expect(() => ship.setSail()).toThrowError('End of itinerary reached');
	});
});
