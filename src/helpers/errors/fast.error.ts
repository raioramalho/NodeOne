export class FastError extends Error {
	code: number;
	name: string;
	constructor(name: string, code: number, message: string, ) {
		super(message);
		this.name = name;
		this.code = code;
	}
}
