import { randomUUID } from 'crypto';

export interface UserProps {
  id?: string;
  name: string;
  last_name: string;
}

export class User {
	constructor(public user: UserProps) {
		this.user = user;
	}

	static create(user: UserProps) {
		return new User({
			id: user.id ?? randomUUID(),
			name: user.name,
			last_name: user.last_name
		});
	}

	get userId() {
		return this.user.id;
	}



}
