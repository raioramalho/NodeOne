import { describe, expect, it } from 'vitest';
import { User } from './user';

describe('Test batery to User', () => {
	it('Should be possible create a user with ', () => {
		const newUser = User.create({
			name: 'Alan',
			last_name: 'Ramalho'
		});

		expect(newUser).toBeInstanceOf(User);
	});


});
