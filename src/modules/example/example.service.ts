import { PrismaClient } from '@prisma/client';
import { CustomError } from '../../helpers/errors/custom.error';
import { Repository } from '../base/repository';

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
				throw new CustomError('NotFound Error',404,'Item not found');
			}
			return verify;
		} catch (error) {
			throw new CustomError('Internal Error',500,'Internal server error');
		}
	}

	async deleteMany(): Promise<any> {
		try {
			const removelAll = await this.Repository.deleteMany();
			if (!removelAll) {
				throw new CustomError('No data for delete', 403, 'No data for delete');
			}
		} catch (error) {
			throw new CustomError('Internal Error', 500,'Internal server error');
		}
	}
}

export const exampleService = new ExampleService();
