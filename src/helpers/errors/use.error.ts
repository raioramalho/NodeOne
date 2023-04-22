import { CustomError } from './custom.error';


export const UseError = {
	NotFound() {
		const error: CustomError = {
			code: 404,
			name: 'Not_Found_Error',
			message: 'Theres no index with this id!'
		};
	}
};
