import { PrismaClient } from '@prisma/client';
import { Repository } from '../base/repository';
import { errorList } from '../../helpers/errors/list.error';
import { ResponseError } from '../../helpers/errors/response.error';

const prisma = new PrismaClient();
class TestRepository extends Repository {
	async deleteMany() {
		return await prisma[this.model.toLocaleLowerCase()].deleteMany();
	}
}

class ExampleService {
	Repository = new TestRepository('Example');
	async findById(id: number): Promise<any> {
		try {
			const verify = await this.Repository.findById(id);
			if (verify) {
				throw new ResponseError(errorList.Not_Found_Error);
			}
			return verify;
		} catch (error) {
			throw new ResponseError(errorList.Internal_Server_Error);
		}
	}

	async deleteMany(): Promise<any> {
		try {
			const removelAll = await this.Repository.deleteMany();
			if (!removelAll) {
				throw new ResponseError(errorList.Not_Found_Error);
			}
		} catch (error) {
			throw new ResponseError(errorList.Internal_Server_Error);
		}
	}
}

export const exampleService = new ExampleService();
