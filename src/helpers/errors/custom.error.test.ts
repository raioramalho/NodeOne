import { describe, expect, expectTypeOf, test } from 'vitest';
import { CustomError } from './custom.error';

describe('Bateria de testes relacionadas a custom error', () => {
	test('Deve verificar a classe custom error', () => {
		const test1: CustomError = {
			code: 404,
			name: 'NotFound',
			message: 'Teste'
		};
		expectTypeOf(test1).toBeObject();
	});
});
