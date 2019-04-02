const Port = require('../src/Port');

describe('Port', () => {
	it('should be instantiated', () => {
		expect(new Port()).toBeInstanceOf(Object);
	});

	it('has a name', () => {
		const port = new Port('Dover');
		expect(port.name).toBe('Dover');
	});

	it('can add a ship to a port', () => {
		const port = new Port('Dover');
		const ship = {};

		port.addShip(ship);

		expect(port.ships).toContain(ship);
	});

	it('can remove a ship from a port', () => {
		const port = new Port('Dover');
		const titanic = {};
		const queenMary = {};

		port.addShip(titanic);
		port.addShip(queenMary);
		port.removeShip(queenMary);
		expect(port.ships).toEqual([ titanic ]);
	});
});
