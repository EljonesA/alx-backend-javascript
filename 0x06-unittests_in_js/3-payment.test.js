// 3-payment.test.js

import { expect } from 'chai';
import sinon from 'sinon';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

//const { expect } = require('chai');
//const sinon = require('sinon');
//const Utils = require('./utils.js');
//const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
	it('should call Utils.calculateNumber with "SUM", 100, and 20', function() {
		const spy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);

		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith('SUM', 100, 20)).to.be.true;

		spy.restore();
	});
});
