import { describe, expect, test } from 'vitest';
describe('Bateria de testes para o hashtool', () => {
	test('test', () => {
		const clean_password = '1q2w3e';
		expect(clean_password).toBe('1q2w3e');
	});
});
