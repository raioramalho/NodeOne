export class ResponseError extends Error {
	name: string;
	code: number;
	message: string;

	constructor(errorObj: {name: string, code: number, message: string}) {
		super(errorObj.message);
		this.name = errorObj.name,
		this.code = errorObj.code,
		this.message = errorObj.message;
	}
}
