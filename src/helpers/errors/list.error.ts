import { HttpStatus } from '@nestjs/common';

class ErrorList {
	Internal_Server_Error = {
		name: 'Internal_Server_Error',
		code: HttpStatus.INTERNAL_SERVER_ERROR,
		message: 'Internal server error!'
	};
	Already_Exists = {
		name: 'Already_Exists_Error',
		code: HttpStatus.CONFLICT,
		message: 'This is not avaliable!'
	};
	Not_Found_Error = {
		name: 'Not_Found_Error',
		code: HttpStatus.NOT_FOUND,
		message: 'No data found!'
	};
}

export const errorList = new ErrorList();
