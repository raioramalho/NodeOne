import { HttpStatus } from '@nestjs/common';

interface IError {
	name: string;
	code: number;
	message: string;
}

class ErrorList {
	Internal_Server_Error: IError = {
		name: 'Internal_Server_Error',
		code: HttpStatus.INTERNAL_SERVER_ERROR,
		message: 'Internal server error!'
	};
	Already_Exists: IError = {
		name: 'Already_Exists_Error',
		code: HttpStatus.CONFLICT,
		message: 'This is not avaliable!'
	};
	Not_Found_Error: IError = {
		name: 'Not_Found_Error',
		code: HttpStatus.NOT_FOUND,
		message: 'No data found!'
	};
	Bad_Request_Error: IError = {
		name: 'Bad_Request_Error',
		code: HttpStatus.BAD_REQUEST,
		message: 'Bad request input!'
	};
	Expectation_Failed_Error: IError = {
		name: 'Expectation_Failed_Error',
		code: HttpStatus.EXPECTATION_FAILED,
		message: 'Expectation falied!'
	};
}

export const errorList = new ErrorList();
