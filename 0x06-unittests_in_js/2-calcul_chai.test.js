import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
	describe('SUM', function() {
		it('should return 6 when inputs are 1.4 and 4.5', function() {
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});

		it('should return 0 when inputs are -1.4 and 1.4', function() {
			expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
		});
	});

	describe('SUBTRACT', function() {
		it('should return -4 when inputs are 1.4 and 4.5', function() {
			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		});

		it('should return -2 when inputs are 1.2 and 3.1', function() {
			expect(calculateNumber('SUBTRACT', 1.2, 3.1)).to.equal(-2);
		});
	});

	describe('DIVIDE', function() {
		it('should return 0.2 when inputs are 1.4 and 4.5', function() {
			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
		});

		it('should return Error when inputs are 1.4 and 0', function() {
			expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
		});

		it('should return Error when inputs are 1.4 and 0.4', function() {
			expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
		});
	});
});
