const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		const from = 'me';
		const text = 'text';
		const message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe('number');
		expect(message.from).toBe(from);
		expect(message.text).toBe(text);
	});
});
describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		const from = 'me';
		const latitude = '111';
		const longitude = '222';
		const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
		const message = generateLocationMessage(from, latitude, longitude);

		expect(typeof message.createdAt).toBe('number');
		expect(message.url).toBe(url);
	});
});
