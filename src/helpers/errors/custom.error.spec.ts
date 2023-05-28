import { describe, expect, test } from 'vitest';
import { ResponseError } from './response.error';
import { errorList } from './list.error';

describe('Bateria de testes relacionadas a custom error', () => {
	test('Deve verificar a classe custom error', () => {
		const customError = new ResponseError(errorList.Not_Found_Error);
		expect(customError.code).toBe(404);
	});
});
