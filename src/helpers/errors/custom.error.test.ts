import { describe, expect, expectTypeOf, test } from 'vitest';
import { CustomError } from './custom.error';
import { UseError } from './use.error';
import { HttpStatus } from '@nestjs/common';

describe('Bateria de testes relacionadas a custom error', () => {
	test('Deve verificar a classe custom error', () => {
		const test1: CustomError = {
			code: HttpStatus.NOT_FOUND,
			name: 'Not_Found_Error',
			message: 'Theres no index with this id!'
		};
		expectTypeOf(test1).toBeObject();
	});
});
