export class ResponseError extends Error {
	name: string;
	code: number;
	message: string;

	constructor(error: any) {
		super(error.message);
		this.name = error.name;
		this.code = error.code;
		this.message = error.message;
	}
}
