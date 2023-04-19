import { describe, expect, test } from 'vitest';
import { hashHelper } from './hash.tool';
describe('Bateria de testes para o hashtool', () => {
	test('test', async () => {
		const clean_password = '1q2w3e';
		const hash_password = await hashHelper.generate(clean_password);
		expect(await hashHelper.compare(clean_password,hash_password)).toBe(true);
	});
});
