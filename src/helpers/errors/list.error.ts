class ErrorList {
	Internal_Server_Error = {
		name: 'Internal_Server_Error',
		code: 500,
		message: 'Internal server error!'
	};
	Not_Found_Error = {
		name: 'Not_Found_Error',
		code: 404,
		message: 'No data found!'
	};
}

export const errorList = new ErrorList();
